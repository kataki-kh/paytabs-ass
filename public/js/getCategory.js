
jQuery(document).ready(function($){
///on any select is changed we get its index to get  sub category 
$('body').on('change','select.form-select', function(event) {
  ///return the id for the select that truggerd the change
console.log(event.target.id);


		///set data to send the request to get sub category
		
		var type = "GET";
        var category_id = jQuery('.'+event.target.id).val();
        var ajaxurl = 'getSubCategory?id='+event.target.value;
        	 $.ajax({
            type: type,
            url: ajaxurl,
            dataType: 'json',
            success: function (data) {

            	///adding the new select for the sub category
            	var index=event.target.id.replace('masterCategory','').replace('subCat','');
            	
            	var newIndex= (parseInt(index.length==0?0:index))+1;
            	var sub = 'sub ';
            	var label =sub.repeat(newIndex)+'category';
            	var data=data.data;
            	//show data when select the master category
            		console.log('Index',index);
            	//remove all sub if we change the master category
            	if($('.'+event.target.id).attr('index')==0){

            	jQuery('.subCategoryContrainer').empty();
            	///remove the sub subs that need to be changed 
            		}		
            	else{
            		$('#subCat'+newIndex+'').remove();
            		

            	}
            	///check if there is data
            	
            	if(data.length>0){
                var select = '<div class="col-md-4" id="subCat'+newIndex+'"><label class="text-danger">'+label+'</label><select class="subCategory form-select form-select-lg mb-3 " aria-label=".form-select-lg example" ID="subCat'+newIndex+'" index="'+newIndex+'"><option disabled selected value=""> -- select an option -- </option>';
                 for(let i = 0; i < data.length; i++) {
   						select=select+'<option value="'+data[i].id+'">'+data[i].name+'</option>'

    						console.log(data[i].id);
						}
				select=select+'</select></div>';
                	console.log('add data to html')
                    jQuery('.subCategoryContrainer').append(select);
                }else{
                	alert('no sub category found');
                }
               

            },
            error: function (data) {
                console.log(data);
            }
        });
});

});