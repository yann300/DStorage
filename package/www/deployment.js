// Autogenerated by Mix
contracts = {};
ctrAddresses = {};
contracts["storage_drive"] = {
	interface: [{"constant":false,"inputs":[{"name":"_k","type":"bytes"}],"name":"remove","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_k","type":"bytes"},{"name":"_v","type":"bytes"}],"name":"set","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_k","type":"bytes"}],"name":"getValue","outputs":[{"name":"","type":"bytes"}],"type":"function"},{"inputs":[],"type":"constructor"}],
	address: "0x187d17938926ab5a1c59c881114055474ede9f9d"
};
contracts["storage_drive"].contractClass = web3.eth.contract(contracts["storage_drive"].interface);
contracts["storage_drive"].contract = contracts["storage_drive"].contractClass.at(contracts["storage_drive"].address);
contracts["<storage_drive - 0>"] = {
	interface: [{"constant":false,"inputs":[{"name":"_k","type":"bytes"}],"name":"remove","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_k","type":"bytes"},{"name":"_v","type":"bytes"}],"name":"set","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_k","type":"bytes"}],"name":"getValue","outputs":[{"name":"","type":"bytes"}],"type":"function"},{"inputs":[],"type":"constructor"}],
	address: "0x187d17938926ab5a1c59c881114055474ede9f9d"
};
contracts["<storage_drive - 0>"].contractClass = web3.eth.contract(contracts["<storage_drive - 0>"].interface);
contracts["<storage_drive - 0>"].contract = contracts["<storage_drive - 0>"].contractClass.at(contracts["<storage_drive - 0>"].address);
if (!ctrAddresses["storage_drive"]){ ctrAddresses["storage_drive"] = [] }ctrAddresses["storage_drive"].push("0x187d17938926ab5a1c59c881114055474ede9f9d")