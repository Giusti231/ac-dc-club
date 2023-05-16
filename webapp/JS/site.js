function validaFaleConosco(){
    if(document.frmFaleConosco.txtnome.value == ""){
        alert("Preencha o campo Nome");
        document.frmFaleConosco.txtnome.focus();
        return false;
    }
    if(document.frmFaleConosco.opcao[0].checked == false && document.frmFaleConosco.opcao[1].checked == false){
        alert("Preencha o campo Sexo.");
        document.frmFaleConosco.opcao[0].focus;
        return false;
    }
   

    if(document.frmFaleConosco.txtEmail.value==""){
        alert("Preencha o campo E-mail.");
        document.frmFaleConosco.txtEmail.focus();
        return false;
    }
    if(document.frmFaleConosco.txtfone.value==""){
        alert("Preencha o campo Telefone.");
        document.frmFaleConosco.txtfone.focus();
        return false;
    }
    if(document.frmFaleConosco.txacomentario.value==""){
        alert("Escreva o seu comentário.");
        document.frmFaleConosco.txacomentario.focus();
        return false;
    }

    return true;
}