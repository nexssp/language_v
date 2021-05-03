// Nexss Programmer Vlang Default Template
// Based on: https://github.com/vlang/v/tree/master/vlib/x/json2
import os
import x.json2

fn main() {
	// Get stdin
	nexss_stdin := os.get_line()
	
	// Decoding json
	raw_json := json2.raw_decode(nexss_stdin) ?
	mut nexss_stdout := raw_json.as_map()

	// readData := nexss_stdout['nexss'].str() 

	nexss_stdout['test'] = "test"
	println(nexss_stdout.str())
}