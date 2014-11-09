$(function() {
    generarTabla('/domicilio/json/', function(data) {
        cargarTabla('table', data, init);
    });
});

function armarFila(index, instancia) {
    fila = '<tr>'
    
    // Atributos
    fila += '<td>' + instancia.pk + '</td>' +
'<td>' + instancia.fields.calle + '</td>'
 + '<td>' + instancia.fields.numero + '</td>'
 + '<td>' + instancia.fields.localidad + '</td>'
;
    
    
    
    
    // Botones 'Editar' y 'Eliminar'
    fila += '<td>' +
            '<a href="/domicilio/edit/'+ instancia.pk + 
            '/" class="btn btn-primary" title="Editar"><span class="glyphicon glyphicon-pencil"></span></a>' +
            '<a href="/domicilio/delete/'+ instancia.pk +
            '/" class="btn btn-danger" title="Eliminar"><span class="glyphicon glyphicon-trash"></span></a>' +
            '</td>';
    
    fila += '</tr>';
    
    return fila;
}
    