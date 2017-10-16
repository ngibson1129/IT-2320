<script type="text/javascript" >
		function load() 	
		{
			var obj=[
			{
				"EmployeeID": "E65086",
				"EmployeeName": "Ayesha Thompson-Turner",
				"Department": "IT"
			},
			{
				"EmployeeID": "E65077",
				"EmployeeName": "George Turner",
				"Department": "HR"
			},
			{
				"EmployeeID": "E6787",
				"EmployeeName": "Sirrus Blackk",
				"Department": "Marketing"
			}
				]	


		var tbl=$("<table/>").attr("id","mytable");
		$("#div1").append(tbl);
		for(var i=0;i<obj.length;i++)
		{
			var tr="<tr>";
			var td1="<td>"+obj[i]["EmployeeID"]+"</td>";
			var td2="<td>"+obj[i]["EmployeeName"]+"</td>";
			var td3="<td>"+obj[i]["Department"]+"</td></tr>";

			$("#mytable").append(tr+td1+td2+td3);

		}
	   }  
	</script>
