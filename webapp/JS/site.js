function validaFaleConosco() {

    // if(document.frmFaleConosco.txtnome.value == ""){
    //     alert("Preencha o campo Nome");
    //     document.frmFaleConosco.txtnome.focus();
    //     return false;
    // }

    /* *******************************************************************************************/
    //VALIDAÇÃO MAIS APRIMORADA USANDO RegExp

    var nome = document.frmFaleConosco.txtnome.value;
    var expRegNome = new RegExp("^[A-zÀ-ü]{3,}([ ]{1}[A-zÀ-ü]{2,})+$");
    if (!expRegNome.test(nome)) {
        alert("Preencha o campo Nome corretamente.");
        document.frmFaleConosco.txtnome.focus();
        return false;
    }

    var fone = document.frmFaleConosco.txtfone.value;
    var expRegFone = new RegExp("^[(]{1}[1-9]{2}[)]{1}[-]{1}[1-9]{4,5}[-]{1}[1-9]{4}$");
    if (!expRegFone.test(fone)) {
        alert("Preencha o comapo Telefone corretamente.");
        document.frmFaleConosco.txtfone.focus();
        return false;
    }




    if (document.frmFaleConosco.opcao[0].checked == false && document.frmFaleConosco.opcao[1].checked == false) {
        alert("Preencha o campo Sexo.");
        document.frmFaleConosco.opcao[0].focus;
        return false;
    }


    // if (document.frmFaleConosco.txacomentario.value == "") {
    //     alert("Escreva o seu comentário.");
    //     document.frmFaleConosco.txacomentario.focus();
    //     return false;
    // }

    var texto = document.frmFaleConosco.txacomentario.value;
    var expRegNome = new RegExp("^(?i?m)[A-zÀ-ü0-9\.\,\:\;\$\n]{1,}([ ]{1}[A-zÀ-ü0-9\.\,\:\;\$\n]{1,})+$");
    if (!expRegNome.test(texto)) {
        alert("Preencha o campo Comente corretamente.");
        document.frmFaleConosco.txacomentario.focus();
        return false;
    }



    var email = document.frmFaleConosco.txtemail.value;
    var expRegEmail = new RegExp("^[A-Za-zÀ-ü0-9-_]+@([A-Z-a-zÀ-ü-_]+\.)+[A-Za-zÀ-ü-_]{2,4}$");
    if (!expRegEmail.test(email)) {
        alert("Preencha o campo E-mail corretamente.");
        document.frmFaleConosco.txtemail.focus();
        return false;
    }

    return true;
}