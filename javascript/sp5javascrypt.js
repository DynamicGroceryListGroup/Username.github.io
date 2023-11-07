<script>
function selectpage(i) 
{
   var a;
   if(i == 0) 
   {
       a = "./html/welcome.html"
   }
   if(i == 1) 
   {
       a = "./html/team.html"
   }
   if(i == 2) 
   {
       a = "./html/documents.html"
   }
   if(i == 3) 
   {
       a = "https://github.com/DynamicGroceryListGroup"
   }
   if(i == 4) 
   {
       a = "./html/references.html"
   }
   document.getElementById('page_viewer').src = a;
}
</script>