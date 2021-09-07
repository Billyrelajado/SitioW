const app = new Vue({
    el:'#app',
    data:{
        titulo:'Delta-WEB',
        user:'jovany',
        tipos:[{desc:'CRUD Dentro de tablas.',c:'crear',r:'leer',u:'actualizar',d:'eliminar',num:6}],
    },
    methods:{
        deltaForm(){
            console.log('vue func');
        }
    }
});