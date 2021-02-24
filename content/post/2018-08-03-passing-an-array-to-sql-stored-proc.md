---
author: jasemagee
date: "2018-08-03T00:00:00Z"
title: Passing an Array to an SQL Stored Procedure
---

This is a short post to demonstrate a simple way to pass an array of data to a stored procedure. I've supplied some C# to use it too.

Firstly, create a custom table type in SQL. Note that you only need to do this step once per database.

{{< highlight sql >}}

CREATE TYPE [dbo].[IdList] AS TABLE(
    [Id] [int] NULL
)

{{< / highlight >}}

Update your stored procedure to accept a parameter of the new type.

{{< highlight sql >}}

@Ids AS dbo.IdList READONLY

{{< / highlight >}}

In C# build the table like this.

{{< highlight csharp >}}

var idTable = new DataTable();
idTable.Columns.Add("Id");
foreach (var id in ids) {
    idTable.Rows.Add(id);
}

{{< / highlight >}}

Add it as a command parameter like so...

{{< highlight csharp >}}

var tableParam = cmd.Parameters.AddWithValue("@Ids", ids);
tableParam.TypeName = "dbo.IdList";
tableParam.SqlDbType = SqlDbType.Structured;

{{< / highlight >}}

Finally, use the array in your stored procedure like this. 


{{< highlight sql >}}

(a.OtherId IN (SELECT Id FROM @Ids)

{{< / highlight >}}





