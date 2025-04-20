---
date: "2022-03-13"
title: Microsoft SQL Loading Large Dataset
---

Lately I've been loading large datasets into Microsoft SQL (MSSQL) and found the quickest way to do so is using [BULK INSERT](https://docs.microsoft.com/en-us/sql/t-sql/statements/bulk-insert-transact-sql?view=sql-server-ver15), even from .NET (instead of SqlBulkCopy for example). Chatting to people, it seems not many knew you could load data straight into MSSQL from a file using this, so I thought I'd write it up.

In my example I've downloaded a 5-million-row CSV from [this](https://eforexcel.com/wp/downloads-18-sample-csv-files-data-sets-for-testing-sales) neat source and used the following command to load it into my local MSSQL server.

Using this table...

{{< highlight code >}}

CREATE TABLE [dbo].[load_5mSalesRecords](
	[Region] [varchar](64) NOT NULL,
	[Country] [varchar](64) NOT NULL,
	[ItemType] [varchar](32) NOT NULL,
	[SalesChannel] [varchar](16) NOT NULL,
	[OrderPriority] [varchar](1) NOT NULL,
	[OrderDate] [varchar](16) NOT NULL,
	[OrderID] [int] NOT NULL,
	[ShipDate] [varchar](16) NOT NULL,
	[UnitsSold] [varchar](8) NOT NULL,
	[UnitPrice] [numeric](6, 2) NOT NULL,
	[UnitCost] [numeric](6, 2) NOT NULL,
	[TotalRevenue] [numeric](10, 2) NOT NULL,
	[TotalCost] [numeric](10, 2) NOT NULL,
	[TotalProfit] [numeric](10, 2) NOT NULL
) ON [PRIMARY]
GO

{{< / highlight >}}

followed by the BULK INSERT...

{{< highlight code >}}

BULK INSERT
dbo.load_5mSalesRecords -- target table
FROM
'C:\Users\Jason\Desktop\5m Sales Records.csv' -- source file
WITH
(
TABLOCK, MAXERRORS = 0
, DATAFILETYPE='char'
, CODEPAGE='65001' -- Unicode (UTF-8)
, FIELDTERMINATOR = ',' -- csv so ,
, FIRSTROW=2 -- ignore header row
)
SELECT @@ROWCOUNT

{{< / highlight >}}

You're able to load 5 million records in 20 seconds into the table.

Now, the gotcha (isn't there always!) is that the file is relative to the SQL server and not the machine you're running the command on. Which seems obvious when you say it but it does mean that if you're writing an app that makes the file then both systems need to be able to access a shared folder. This is also true on Azure, but you're able to use [Azure Blob storage](https://docs.microsoft.com/en-us/sql/relational-databases/import-export/examples-of-bulk-access-to-data-in-azure-blob-storage?view=sql-server-ver15) to get around it.

