<form name="doublecombo">
<!--1er menu desplegable-->
<select name="example" size="1" onChange="redirect(this.options.selectedIndex)">
<option>Technology Sites</option>
<option>News Sites</option>
</select>

<!--2do menu desplegable-->
<select name="stage2" size="1">
<option value="http://javascriptkit.com">JavaScript Kit</option>
<option value="http://www.news.com">News.com</option>
<option value="http://www.wired.com">Wired News</option>
</select>
<input type="button" name="test" value="Go!"
onClick="go()">
</p>

<script>
<!--

/*
Double Combo Script Credit
By JavaScript Kit (www.javascriptkit.com)
Over 200+ free JavaScripts here!
*/

var groups=document.doublecombo.example.options.length
var group=new Array(groups)
for (i=0; i<groups; i++)
group[i]=new Array()

group[0][0]=new Option("JavaScript Kit","http://javascriptkit.com")
group[0][1]=new Option("News.com","http://www.news.com")
group[0][2]=new Option("Wired News","http://www.wired.com")

group[1][0]=new Option("CNN","http://www.cnn.com")
group[1][1]=new Option("ABC News","http://www.abcnews.com")

var temp=document.doublecombo.stage2

function redirect(x){
for (m=temp.options.length-1;m>0;m--)
temp.options[m]=null
for (i=0;i<group[x].length;i++){
temp.options[i]=new Option(group[x][i].text,group[x][i].value)
}
temp.options[0].selected=true
}

function go(){
location=temp.options[temp.selectedIndex].value
}
//-->
</script>

</form> 