# SPServicesExtensions

> This is simple extension on Marc Andersons SPServices library


## Getting Started

Download the [production version][min] or the [development version][max].

[min]: https://raw.githubusercontent.com/dimkk/jquery-spsext/master/dist/jquery.spsext.min.js
[max]: https://raw.githubusercontent.com/dimkk/jquery-spsext/master/dist/jquery.spsext.js

https://github.com/sympmarc/SPServices <- To download jquery.SPServices

In your sharepoint form page:
1) Modify the <SharePoint:FormField> like that:
<SharePoint:FormField runat="server" id="ff15{concat($Pos,'---YOUR UNIQUE IDENTIFIER GOES HERE---')}" ControlMode="New" FieldName="User_x0020_Roles" __designer:bind="{ddwrt:DataBind('i',concat('ff15',concat($Pos,'---YOUR UNIQUE IDENTIFIER GOES HERE---')),'Value','ValueChanged','ID',ddwrt:EscapeDelims(string(@ID)),'@User_x0020_Roles')}"/>

2) places files anywhere in hive or virtual fs and add this markup to your form:
```html
<script src="[YOUR PATH]/jquery.js"></script>
<script src="[YOUR PATH]/jquery.SPServices-0.7.2.js"></script>
<script src="[YOUR PATH]/spsext.js"></script>
<script>
(function() {
    if (!_spBodyOnLoadCalled) {
        _spBodyOnLoadFunctions.push(pageLoad);
    } else {
        pageLoad();
    }

    function pageLoad() {
        var pp = $.SPServices.findPP({ //Returns spservices object like from SPFindPeoplePicker
        	id: '', //Unique FormControl Identifier
        	valueToSet: '', //account of user, like davolkovsky
        	checkNames: true, // in order to click check
        	debug: true // this will cause to highlight the pp row
    	});
    }
})();
</script>
```
Tested on jquery - 1.9.1, SPServices 0.7.2

## License

MIT © dimkk
