searchState.loadedDescShard("sqlness_runner", 0, "SQL Harness for GrepTimeDB\nThe path to the directory where GreptimeDB’s binaries …\nDirectory of test cases\nEnvironment Configuration File\nFail this run as soon as one case fails if true\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nThe number of jobs to run in parallel. Default to half of …\nThe kafka wal broker endpoints. This config will suppress …\nAddress of the mysql server. Must be set if server_addr is …\nAddress of the postgres server. Must be set if server_addr …\nPreserve persistent state in the temporary directory. This …\nPull Different versions of GreptimeDB on need.\nAddress of the grpc server.\nAddresses of the server.\nWhether to setup etcd, by default it is false.\nWhether to setup pg, by default it is false.\nThe store addresses for metadata, if empty, will use …\nName of test cases to run. Accept as a regexp.\nThe type of Wal.\nThe path to the directory that contains the pre-built …\nBuild the DB with <code>cargo build --bin greptime</code>\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nPull different versions of GreptimeDB on need.\nstop and restart the server process\nSetup etcd if needed.\nSetup PostgreSql if needed.\nSetup kafka wal cluster if needed. The counterpart is in …\nStop one <code>Database</code>.\nStore address for metasrv metadata\nStart time in millisecond\nThe path to the directory that contains the old pre-built …\nIndicates whether the runner needs to start a kafka cluster\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns the addresses of the server that needed to be …\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns the server addresses to connect. Only standalone …\nCheck port every 0.1 second.\nSpin-waiting a socket address is available, or timeout. …\nGet the dir of test cases. This function only works when …\nGet a random available port by binding to port 0\nGet the dir that contains workspace manifest (the …\nPull the binary if it does not exist and …\nUse curl to download the binary from the release page.\nSet up a standalone etcd in docker.\nSet up a PostgreSQL server in docker.\nStart kafka cluster if needed. Config file is …\nGet the path of sqlness config dir <code>tests/conf</code>.\nStop and remove the etcd container\nStop kafka cluster if needed. Config file is …")