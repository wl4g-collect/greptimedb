searchState.loadedDescShard("table", 0, "Table and TableEngine requests\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nSNAFU context selector for the <code>Error::BuildColumnDescriptor</code>…\nSNAFU context selector for the <code>Error::ColumnExists</code> variant\nSNAFU context selector for the <code>Error::ColumnNotExists</code> …\nSNAFU context selector for the <code>Error::Datafusion</code> variant\nContains the error value\nDefault error implementation of table.\nSNAFU context selector for the <code>Error::InvalidAlterRequest</code> …\nSNAFU context selector for the <code>Error::InvalidColumnOption</code> …\nSNAFU context selector for the …\nSNAFU context selector for the …\nContains the success value\nSNAFU context selector for the <code>Error::ParseTableOption</code> …\nSNAFU context selector for the <code>Error::RemoveColumnInIndex</code> …\nSNAFU context selector for the <code>Error::SchemaBuild</code> variant\nSNAFU context selector for the <code>Error::SchemaConversion</code> …\nSNAFU context selector for the <code>Error::SetFulltextOptions</code> …\nSNAFU context selector for the <code>Error::SetSkippingOptions</code> …\nSNAFU context selector for the <code>Error::TableOperation</code> …\nSNAFU context selector for the <code>Error::TableProjection</code> …\nSNAFU context selector for the <code>Error::TablesRecordBatch</code> …\nSNAFU context selector for the <code>Error::UnsetSkippingOptions</code> …\nSNAFU context selector for the <code>Error::Unsupported</code> variant\nConsume the selector and return the associated error\nConsume the selector and return the associated error\nConsume the selector and return the associated error\nConsume the selector and return the associated error\nConsume the selector and return the associated error\nConsume the selector and return the associated error\nConsume the selector and return the associated error\nConsume the selector and return the associated error\nConsume the selector and return the associated error\nConsume the selector and return a <code>Result</code> with the …\nConsume the selector and return a <code>Result</code> with the …\nConsume the selector and return a <code>Result</code> with the …\nConsume the selector and return a <code>Result</code> with the …\nConsume the selector and return a <code>Result</code> with the …\nConsume the selector and return a <code>Result</code> with the …\nConsume the selector and return a <code>Result</code> with the …\nConsume the selector and return a <code>Result</code> with the …\nConsume the selector and return a <code>Result</code> with the …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nAn ordinary physical table.\nContains the error value\nThe provider guarantees that all returned data satisfies …\nIndicates whether and how a filter expression can be …\nThe expression can be used to help minimise the data …\nContains the success value\nStruct used to serialize and deserialize <code>TableInfo</code>.\nStruct used to serialize and deserialize <code>TableMeta</code>.\nThe result after splitting requests by column location …\nIdentifier of the table.\nBuilder for <code>TableInfo</code>.\nError type for TableInfoBuilder\nThe table metadata.\nBuilder for <code>TableMeta</code>.\nError type for TableMetaBuilder\nIndicates the type of this table for metadata/catalog …\nA transient table.\nUninitialized field\nUninitialized field\nThe expression cannot be used by the provider.\nCustom validation error\nCustom validation error\nA non-materialised table that itself uses a query …\nAllocate a new column for the table.\nBuilds a new <code>TableMeta</code>.\nBuilds a new <code>TableInfo</code>.\nReturns the new TableMetaBuilder after applying given …\nCreates a TableMetaBuilder with modified column fulltext …\nCreates a TableMetaBuilder with modified column inverted …\nCreates a TableMetaBuilder with modified column skipping …\nall column names should be added.\ncolumn requests should be added after already exist …\ncolumn requests should be added at first place.\ncolumn requests should be added at last place.\nCreate an empty builder, with all fields set to <code>None</code> or …\nCreate an empty builder, with all fields set to <code>None</code> or …\nComment of the table.\nComment of the table.\nComment of the table.\nNote: Please always use [new_meta_builder] to create new …\nEngine type of this table. Usually in small case.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the full table name in the form of …\nId and version of the table.\nId and version of the table.\nId and version of the table.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns true when the table is the metric engine’s …\nReturn true if the table’s TTL is <code>instant</code>.\nName of the table.\nName of the table.\nName of the table.\nCreate a <code>TableMetaBuilder</code> from the current TableMeta.\nNext column id of a new column. Deprecated. See …\nTable options.\nTable options.\nTable options.\nOrder doesn’t matter to this array.\nThe indices of columns in primary key. Note that the index …\nThe indices of columns in primary key. Note that the index …\nThe indices of columns in primary key. Note that the index …\nThe indices of columns in primary key. Note that the index …\nCreates a TableMetaBuilder with modified table options.\nSort the columns in RawTableInfo, logical tables require …\nSplit requests into different groups using column location …\nUnique id of this table.\nExtracts region options from table info.\nThe indices of columns in value. Order doesn’t matter to …\nVersion of the table, bumped when metadata (such as …\nReference-counted pointer to a list of logical exprs.\n<code>build_time_range_predicate</code> extracts time range from …\nReturns the logical exprs.\nlogical exprs\nExtract time range filter from <code>IN (...)</code> expr.\nExtract time range filter from <code>WHERE</code>/<code>IN (...)</code>/<code>BETWEEN</code> …\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCreates a new <code>Predicate</code> by converting logical exprs to …\nEvaluates the predicate against the <code>stats</code>. Returns a …\nAssert the scalar value is not utf8. Returns <code>None</code> if it’…\nBuilds physical exprs according to provided schema.\nAdd column request\nAlter table request\nCopy table request\nDelete (by primary key) request\nChange column datatype request\nTruncate table request\nAdd column if not exists.\nExtra options that may not applicable to all table engines.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nValues of each column in this table’s primary key and …\nTime-to-live of table. Expired data will be automatically …\nReturns true if the <code>key</code> is a valid key for any engine or …\nMemtable size of memtable.\nStatistics for a column within a relation\nStatistics for a relation.\nStatistics on a column level\nNumber of distinct values\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nIf true, any field that is <code>Some(..)</code> is the actual value in …\nMaximum value of column\nMinimum value of column\nNumber of null values on column\nThe number of table rows\ntotal bytes of the table rows\nThe <code>Expr</code> to call UDF function <code>now()</code>.\nTable handle.\nCollects column default <code>Expr</code> from column schemas.\nColumns default <code>Expr</code>\nTry to cast the <code>ColumnDefaultConstraint</code> to <code>Expr</code> by the …\nGet field columns in the definition order.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGet column default <code>Expr</code>, if available.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nGet primary key columns in the definition order.\nGet a reference to the schema for this table.\nTests whether the table provider can make use of any or …\nGet a reference to the table info.\nGet the type of this table for metadata/catalog purposes.\nAdapt greptime’s TableRef to DataFusion’s TableProvider…\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nThis metrics struct is used to record and hold metrics …\nElapsed time used to <code>.await</code>ing the stream\nTimestamp when the stream finished\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nUsed memory in bytes\nCreate a new MemoryUsageMetrics structure, and set …\nNumber of rows in output\nElapsed time used to <code>poll</code> the stream\nReturn a timer guard that records the time elapsed in poll\nRecord the end time of the query\nnumbers table for test\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nA plan to read multiple partitions from a region of a …\nReturns the argument unchanged.\nReturns the argument unchanged.\nGet the partition ranges of the scanner. This method will …\nSimilar to <code>Self::get_partition_ranges</code> but don’t collapse …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nThe expected output ordering for the plan.\nUpdate the partition ranges of underlying scanner.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nRepresents a resolved path to a table of the form …\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCreates a 1 column 100 rows table, with table name “…\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.")