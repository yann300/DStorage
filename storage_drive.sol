//Sample contract
contract storage_drive
{
	itmap st;
	address owner;
	
	function storage_drive() 
	{
		owner = msg.sender;
	}
	
	function set(bytes _k, bytes _v) 
	{
		if (msg.sender != owner)
			throw;
		insert(st, _k, _v);
	}
	
	function getValue(bytes _k) returns (bytes)
	{
		return st.data[_k].value;
	}
		
	function remove(bytes _k)
	{
		if (msg.sender != owner)
			throw;
		remove(st, _k);
	}
	
	struct itmap
 	{
    	mapping(bytes => IndexValue) data;
    	KeyFlag[] keys;
    	uint size;
  	}
  
	struct IndexValue { uint keyIndex; bytes value; }
	struct KeyFlag { bytes key; bool deleted; }
	function insert(itmap storage self, bytes key, bytes value) internal returns (bool replaced)
	{
		uint keyIndex = self.data[key].keyIndex;
		self.data[key].value = value;
		if (keyIndex > 0)
		return true;
		else
		{
			keyIndex = self.keys.length++;
			self.data[key].keyIndex = keyIndex + 1;
			self.keys[keyIndex].key = key;
			self.size++;
			return false;
		}
	}
	
	function remove(itmap storage self, bytes key) internal returns (bool success)
	{
		uint keyIndex = self.data[key].keyIndex;
		if (keyIndex == 0)
		return false;
		delete self.data[key];
		self.keys[keyIndex - 1].deleted = true;
		self.size --;
	}
}	

