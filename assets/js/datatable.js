$(document).ready(function () {
    $('#example').DataTable({
        processing: true,
        serverSide: true,
        ajax: 'assets/php/datatable.php',
		
		"columnDefs": [ {
			"targets": 0,
			// "data": "name",
			"render": function ( data, type, row, meta ) {
				return '<a href="/boardgames/'+data.replace(/ /g,"_")+'.html">'+data+'</a>';
			}
		} ]
		
    });
});