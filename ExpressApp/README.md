DB USAGE
=========


<p>The folder containing the database that was used is now included. The admin database was used(default when you don't specify). User information is stored in the users collection. Checklist information is stored in the checklist collection.</p>

Structure of a checklist collection entry:

<b>Note:</b> Checklist in the entry has to be capitalized to work in this code, currently.

```
{
	"_id" : ObjectId("536558ca22f847f00f14f7cf"),
	"name" : "Housing",
	"Checklist" : {
		"0" : {
			"name" : "Item1",
			"text" : {
				"0" : "some text",
				"1" : "some text",
				"2" : "some text"
			}
		},
		"1" : {
			"name" : "item2",
			"text" : {
				"0" : "some more text",
				"1" : "some more text also",
				"2" : "some more more text"
			}
		}
	}
}

```


<b>GITHUB:</b> https://github.com/UMCompass/Horizon