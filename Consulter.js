var iconlike="<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='#272e80' class='bi bi-hand-thumbs-up' viewBox='0 0 16 16'><path d='M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2 2 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a10 10 0 0 0-.443.05 9.4 9.4 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a9 9 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.2 2.2 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.9.9 0 0 1-.121.416c-.165.288-.503.56-1.066.56z'/></svg>"
var icondesabon="<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='#272e80' class='bi bi-bell-fill' viewBox='0 0 16 16'><path d='M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901'/></svg>";
var icondislike="<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='#272e80' class='bi bi-hand-thumbs-up-fill' viewBox='0 0 16 16'><path d='M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a10 10 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733q.086.18.138.363c.077.27.113.567.113.856s-.036.586-.113.856c-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.2 3.2 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.8 4.8 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z'/></svg>";
var iconsuivi="<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='#272e80' class='bi bi-bell' viewBox='0 0 16 16'><path d='M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6'/></svg>";


function commentairesfields(){
        // Initialiser Bootstrap Tooltip
    $('[data-toggle="tooltip"]').tooltip();
            var lcl_domaine_name = $("input[id='lcl_domaine_name']");
    lcl_domaine_name.attr("data-toggle", "tooltip");
    lcl_domaine_name.attr("data-placement", "right");
    lcl_domaine_name.attr("title", "Pour sélectionner le domaine, utilisez la loupe ->");

                var lcl_sousdomaine_name = $("input[id='lcl_sousdomaine_name']");
    lcl_sousdomaine_name.attr("data-toggle", "tooltip");
    lcl_sousdomaine_name.attr("data-placement", "right");
    lcl_sousdomaine_name.attr("title", "Pour sélectionner le sous-domaine, utilisez la loupe ->");

                    var lcl_declarant_name = $("input[id='lcl_declarant_name']");
    lcl_declarant_name.attr("data-toggle", "tooltip");
    lcl_declarant_name.attr("data-placement", "right");
    lcl_declarant_name.attr("title", "Pour modifier le Déclarant, utilisez la loupe ->");

                        var lcl_unitdaffectation_name = $("input[id='lcl_unitdaffectation_name']");
    lcl_unitdaffectation_name.attr("data-toggle", "tooltip");
    lcl_unitdaffectation_name.attr("data-placement", "right");
    lcl_unitdaffectation_name.attr("title", "Pour modifier Unité d'affectation, utilisez la loupe ->");

                            var lcl_agencecompteclient = $("input[id='lcl_agencecompteclient']");
    lcl_agencecompteclient.attr("data-toggle", "tooltip");
    lcl_agencecompteclient.attr("data-placement", "right");
    lcl_agencecompteclient.attr("title", "Saisissez l'agence le compte et la lettre clé, d'un client concerné, exemple 775 44025K");

                            var lcl_datedapparition_datepicker_description = $("input[id='lcl_datedapparition_datepicker_description']");
    lcl_datedapparition_datepicker_description.attr("data-toggle", "tooltip");
    lcl_datedapparition_datepicker_description.attr("data-placement", "right");
    lcl_datedapparition_datepicker_description.attr("title", "La date à laquelle l'irritant a été constaté pour la première fois");
                        
    var lcl_nreferencemere_name = $("input[id='lcl_nreferencemere_name']");
    lcl_nreferencemere_name.attr("data-toggle", "tooltip");
    lcl_nreferencemere_name.attr("data-placement", "right");
    lcl_nreferencemere_name.attr("title", "Dans le cas ou l'irritant est au statut 'doublon', cette zone contient le numéro de l'irritant principal");
 
 
    

$('#lcl_description').attr('placeholder', "Décrivez votre irritant avec le plus de précision possible. Plus l'irritant est spécifique, plus facilement une solution pourra être imaginée");
$('#lcl_communication').attr('placeholder', "Zone qui servira lors de la notification sur l'avancement d'un irritant");
    

}
function Modifierirritant(recordid) {
    window.open("/MOdifier-irritant-cellule/?id=" + encodeURIComponent(recordid), "_blank", 
"fullscreen=yes,menubar=no,toolbar=no,location=no,status=no,scrollbars=yes,resizable=yes"
);
}
       function setdoublonvisibility(){
                var lcl_statutdelirritant = $("#lcl_statutdelirritant").val();
if(lcl_statutdelirritant!=851890001)
        $( "#lcl_nreferencemere_name" ).parent().parent().parent().hide();
    else
           $( "#lcl_nreferencemere_name" ).parent().parent().parent().show();
       }

let abonnements;
let likes;
let mesirritants;
let irritantEstVu = null;

function peutMarquerIrritantVu() {
    return $("#rolelist").val() === "Cellule";
}

async function chargerVueIrritant() {
    const contactId = $("#contactId").val();
    const recordId = $("#recordId").val();
    const guid = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    if (!guid.test(contactId) || !guid.test(recordId)) {
        throw new Error("Contact ou irritant absent ou invalide.");
    }

    let url = "/_api/lcl_abonnements?$select=lcl_abonnementid&$filter=(_lcl_collaborateur_value eq " + contactId + " and _lcl_irritant_value eq " + recordId + " and lcl_type eq 851890002 and statecode eq 0)";
    const enregistrements = [];
    while (url) {
        const data = await webapi.safeAjax({ type: "GET", url, contentType: "application/json" });
        if (!data || !Array.isArray(data.value) || data.value.some(record => !guid.test(record.lcl_abonnementid))) {
            throw new Error("Reponse invalide lors du chargement du statut Vu.");
        }
        enregistrements.push(...data.value);
        url = data["@odata.nextLink"] || data["odata.nextLink"];
    }
    return enregistrements;
}

function afficherBoutonVue(estVu) {
    irritantEstVu = estVu;
    const libelle = estVu === null ? "Réessayer le chargement du statut Vu"
        : estVu ? "Retirer le statut Vu" : "Marquer comme vu";
    $("#btnvue")
        .prop("disabled", false)
        .attr("aria-label", libelle)
        .text(libelle);
}

async function MarquerIrritantVu() {
    if (!peutMarquerIrritantVu()) return;

    const bouton = $("#btnvue");
    if (bouton.prop("disabled")) return;
    bouton.prop("disabled", true).text("Enregistrement...");

    try {
        const vues = await chargerVueIrritant();
        if (irritantEstVu === null) {
            afficherBoutonVue(vues.length > 0);
            return;
        }
        if (irritantEstVu) {
            for (const vue of vues) {
                await webapi.safeAjax({
                    type: "DELETE",
                    url: "/_api/lcl_abonnements(" + vue.lcl_abonnementid + ")",
                    contentType: "application/json"
                });
            }
            afficherBoutonVue(false);
        } else if (vues.length === 0) {
            const record = {
                "lcl_Collaborateur@odata.bind": "/contacts(" + $("#contactId").val() + ")",
                "lcl_irritant@odata.bind": "/lcl_irritants(" + $("#recordId").val() + ")",
                lcl_type: 851890002
            };
            await webapi.safeAjax({
                type: "POST",
                url: "/_api/lcl_abonnements",
                contentType: "application/json",
                data: JSON.stringify(record)
            });
            afficherBoutonVue(true);
        } else {
            afficherBoutonVue(true);
        }
    } catch (error) {
        console.error("Erreur de modification du statut Vu :", error);
        afficherBoutonVue(null);
        alert("Impossible de modifier le statut Vu. Veuillez vérifier son état avant de réessayer.");
    }
}

async function initialiserBoutonVue() {
    if (!peutMarquerIrritantVu()) {
        $("#btnvue").remove();
        return;
    }

    try {
        if (!$("#btnvue").length) {
            const emplacement = $("#btnabonnement");
            if (!emplacement.length) {
                throw new Error("Bouton de suivi introuvable pour ajouter le bouton Vu.");
            }
            $("<button>", {
                id: "btnvue",
                type: "button",
                class: "btn btn-primary",
                text: "Chargement..."
            }).css({ "background-color": "#272e80", color: "white", "margin-left": "4px" })
                .insertAfter(emplacement);
        }
        $("#btnvue").prop("disabled", true)
            .off("click.vue").on("click.vue", MarquerIrritantVu);
        const vue = await chargerVueIrritant();
        afficherBoutonVue(vue.length > 0);
    } catch (error) {
        console.error("Erreur de chargement du bouton Vu :", error);
        afficherBoutonVue(null);
        alert("Impossible de charger le statut Vu. Veuillez réessayer avec le bouton.");
    }
}

function setbtncolor(){
     $("#btnabonnement").css("color", "white");
$("#btnlike").css("color", "white");
    $("#btnndeactiver").css("color", "white");
  $('#btndislike').css("color", "white");
    $('#btndeabonner').css("color", "white");
 $('#UpdateButton').css("color", "white");
  $('#btnModalIrritant').css("color", "white");
 $('#btnModalhistorique').css("color", "white");
 $('#btnModalAbonnement').css("color", "white");
 $('#btnModalLike').css("color", "white");
 $('#btnnotifierresolveur').css("color", "white");
 $('#btnnotifierdeclarant').css("color", "white");
}
function toggleTextColor(button) {
    
setbtncolor();
        if (button.style.color === 'yellow' || button.style.color === 'rgb(255, 215, 0)') {
            button.style.color = 'white';
        } else {
            button.style.color = '#FFD700'; // jaune
        }
    }
async function Getlistlike() {
    var contactId = $("#contactId").val();

        let promise = new Promise((resolve, reject) => {

             webapi.safeAjax({
        type: "GET",
        url: "/_api/lcl_abonnements?$select=_lcl_irritant_value&$filter=(_lcl_collaborateur_value eq " + contactId + " and lcl_type eq 851890001 and _lcl_irritant_value ne null and statecode eq 0)",
        contentType: "application/json",
        headers: {
            "Prefer": "odata.include-annotations=*"
        },
        success: function(data, textStatus, xhr) {
            var results = data;
            console.log(results);
            likes = new Array(results.value.length);
            for (var i = 0; i < results.value.length; i++) {
                var result = results.value[i];
                var lcl_irritant = result["_lcl_irritant_value"]; // Lookup
                likes.push(lcl_irritant)
             
            }
                if (results.value.length > 0) resolve(results.value.length);
                else resolve(null);
        },
        error: function(xhr, textStatus, errorThrown) {
            console.log(xhr);
        }
    });
    })
    let result = await promise;
    return (result);
}

async function Getlistmesirritants() {
    var contactId = $("#contactId").val();
        let promise = new Promise((resolve, reject) => {
    webapi.safeAjax({
	type: "GET",
	url: "/_api/lcl_irritants?$filter=(statecode eq 0 and _lcl_declarant_value eq "+contactId+")",
	contentType: "application/json",
	headers: {
		"Prefer": "odata.include-annotations=*"
	},
	success: function (data, textStatus, xhr) {
		var results = data;
		console.log(results);
         mesirritants = new Array(results.value.length);
		for (var i = 0; i < results.value.length; i++) {
			var result = results.value[i];
			// Columns
			var lcl_irritantid = result["lcl_irritantid"]; // Guid
                            mesirritants.push(lcl_irritantid)

		}
         if (results.value.length > 0) resolve(results.value.length);
                else resolve(null);
	},
	error: function (xhr, textStatus, errorThrown) {
		console.log(xhr);
	}
});
           
    })
    let result = await promise;
    return (result);
}
async function Getlistabonnement() {

     var contactId = $("#contactId").val();

        let promise = new Promise((resolve, reject) => {

             webapi.safeAjax({
        type: "GET",
        url: "/_api/lcl_abonnements?$select=_lcl_irritant_value&$filter=(_lcl_collaborateur_value eq " + contactId + " and lcl_type eq 851890000 and _lcl_irritant_value ne null and statecode eq 0)",
        contentType: "application/json",
        headers: {
            "Prefer": "odata.include-annotations=*"
        },
        success: function(data, textStatus, xhr) {
            var results = data;
            console.log(results);
            abonnements = new Array(results.value.length);
            for (var i = 0; i < results.value.length; i++) {
                var result = results.value[i];
                var lcl_irritant = result["_lcl_irritant_value"]; // Lookup
                abonnements.push(lcl_irritant)
             
            }
                if (results.value.length > 0) resolve(results.value.length);
                else resolve(null);
        },
        error: function(xhr, textStatus, errorThrown) {
            console.log(xhr);
        }
    });
    })
    let result = await promise;
    return (result);


   
}
function AutoRemplirParcour() {
    var lcl_macroetape = $("#lcl_macroetape").val();
    webapi.safeAjax({
        type: "GET",
        url: "/_api/lcl_parcouremacroetapes(" + lcl_macroetape + ")?$select=_lcl_parcour_value,_lcl_resolveur_value",
        contentType: "application/json",
        headers: {
            "Prefer": "odata.include-annotations=*"
        },
        success: function(data, textStatus, xhr) {
            var result = data;
            console.log(result);
            // Columns
            var lcl_parcouremacroetapeid = result["lcl_parcouremacroetapeid"]; // Guid
            var lcl_parcour = result["_lcl_parcour_value"]; // Lookup
            var lcl_parcour_formatted = result["_lcl_parcour_value@OData.Community.Display.V1.FormattedValue"];
            var lcl_parcour_lookuplogicalname = result["_lcl_parcour_value@Microsoft.Dynamics.CRM.lookuplogicalname"];
            var lcl_resolveur = result["_lcl_resolveur_value"]; // Lookup
            var lcl_resolveur_formatted = result["_lcl_resolveur_value@OData.Community.Display.V1.FormattedValue"];
            var lcl_resolveur_lookuplogicalname = result["_lcl_resolveur_value@Microsoft.Dynamics.CRM.lookuplogicalname"];
            if(lcl_parcour!=null){
  $("#lcl_parcoure_name").val(lcl_parcour_formatted).trigger("change");
            $("#lcl_parcoure").val(lcl_parcour);
            $("#lcl_parcoure_entityname").val(lcl_parcour_lookuplogicalname);
            }
           if(lcl_resolveur!=null){
            $("#lcl_resolveur_name").val(lcl_resolveur_formatted).trigger("change");
            $("#lcl_resolveur").val(lcl_resolveur);
            $("#lcl_resolveur_entityname").val(lcl_resolveur_lookuplogicalname);
           }

        },
        error: function(xhr, textStatus, errorThrown) {
            console.log(xhr);
        }
    });
}
function Changerstatutirritant(statut) {
    var record = {};
    record.statecode = statut; // State
    var recordId = $("#recordId").val();
    webapi.safeAjax({
        type: "PATCH",
        contentType: "application/json",
        url: "/_api/lcl_irritants(" + recordId + ")",
        data: JSON.stringify(record),
        success: function(data, textStatus, xhr) {
            window.location.reload();
        },
        error: function(xhr, textStatus, errorThrown) {
            console.log(xhr);
        }
    });
}
function Notifier(field) {
    
    var recordId = $("#recordId").val();
var record = {};
record.lcl_destinatairenotification = field; // Text

webapi.safeAjax({
	type: "PATCH",
	contentType: "application/json",
	url: "/_api/lcl_irritants("+recordId+")",
	data: JSON.stringify(record),
	success: function (data, textStatus, xhr) {
        if(field=="Notifier Résolveur"){
		alert("Une notification a bien été transmise vers le Résolveur");
        }
else{
		alert("Une notification a bien été transmise vers le Déclarant");

        }
	},
	error: function (xhr, textStatus, errorThrown) {
		console.log(xhr);
	}
});
}
function remplirDataTableabonnement() {
    var recordId = $("#recordId").val();
    var urlapi = "/_api/lcl_abonnements?$select=_lcl_collaborateur_value&$filter=(_lcl_irritant_value eq " + recordId + " and lcl_type eq 851890000)";
    webapi.safeAjax({
        type: "GET",
        url: urlapi,
        contentType: "application/json",
        headers: {
            "Prefer": "odata.include-annotations=*"
        },
        success: function(data, textStatus, xhr) {
            var resultslistabonnement = data.value;
            console.log("remplirDataTableabonnement length" + resultslistabonnement.length)
            $("#btnModalAbonnement").html("Abonnements (" + resultslistabonnement.length + ")");
            var listabb = $('#listabonnement').DataTable({
                "language": {
                    "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json"
                },
                data: resultslistabonnement,
                columns: [{
                    data: null,
                    title: "Collaborateur",
                    render: function(data, type, row) {
                        return row["_lcl_collaborateur_value@OData.Community.Display.V1.FormattedValue"] || "";
                    }
                }]
            });
        },
        error: function(xhr, textStatus, errorThrown) {
            console.log(xhr);
        }
    });
}
function remplirDataTablelike() {
    var recordId = $("#recordId").val();
    var urlapi = "/_api/lcl_abonnements?$select=_lcl_collaborateur_value&$filter=(_lcl_irritant_value eq " + recordId + " and lcl_type eq 851890001)";
    webapi.safeAjax({
        type: "GET",
        url: urlapi,
        contentType: "application/json",
        headers: {
            "Prefer": "odata.include-annotations=*"
        },
        success: function(data, textStatus, xhr) {
            var resultslikelist = data.value;
            console.log("remplirDataTablelike length" + resultslikelist.length);
            $("#btnModalLike").html("Likes (" + resultslikelist.length + ")");
            var likelist = $('#likelist').DataTable({
                "language": {
                    "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json"
                },
                data: resultslikelist,
                columns: [{
                    data: null,
                    title: "Collaborateur",
                    render: function(data, type, row) {
                        return row["_lcl_collaborateur_value@OData.Community.Display.V1.FormattedValue"] || "";
                    }
                }]
            });
        },
        error: function(xhr, textStatus, errorThrown) {
            console.log(xhr);
        }
    });
}
function remplirDataTableHistorique() {
    var userrole = $("#rolelist").val();
    var recordId = $("#recordId").val();
    if (userrole != "Cellule") {
        var urlapi = "/_api/lcl_historiques?$select=lcl_champmodif,createdon,lcl_description&$filter=(_lcl_irritant_value eq " + recordId + " and lcl_champmodif ne 851890000)";
    } else {
        var urlapi = "/_api/lcl_historiques?$select=lcl_champmodif,createdon,lcl_description&$filter=(_lcl_irritant_value eq " + recordId + ")";;
    }
    webapi.safeAjax({
        type: "GET",
        url: urlapi,
        contentType: "application/json",
        headers: {
            "Prefer": "odata.include-annotations=*"
        },
        success: function(data, textStatus, xhr) {
            var resultshistoriqueirritent = data.value;
            console.log("remplirDataTableHistorique length" + resultshistoriqueirritent.length)
            var historiqueirritent = $('#historiqueirritant').DataTable({
                "language": {
                    "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json"
                },
                data: resultshistoriqueirritent,
                columns: [{
                    data: null,
                    title: "Champ modifié",
                    render: function(data, type, row) {
                        return row["lcl_champmodif@OData.Community.Display.V1.FormattedValue"] || "";
                    }
                }, {
                    data: null,
                    title: "Valeur",
                    render: function(data, type, row) {
                        return row["lcl_description"] || "";
                    }
                }, {
                    data: null,
                    title: "Date Modification",
                    render: function(data, type, row) {
                        return row["createdon@OData.Community.Display.V1.FormattedValue"] || "";
                    }
                }]
            });
        },
        error: function(xhr, textStatus, errorThrown) {
            console.log(xhr);
        }
    });
}
async function aliker() {
    var contactId = $("#contactId").val();
    var recordId = $("#recordId").val();
    let promise = new Promise((resolve, reject) => {
        webapi.safeAjax({
            type: "GET",
            url: "/_api/lcl_abonnements?$filter=(_lcl_collaborateur_value eq " + contactId + " and _lcl_irritant_value eq " + recordId + " and lcl_type eq 851890001 and statecode eq 0)",
            contentType: "application/json",
            headers: {
                "Prefer": "odata.include-annotations=*"
            },
            success: function(data, textStatus, xhr) {
                var results = data;
                if (results.value.length > 0) resolve(results.value[0]["lcl_abonnementid"]);
                else resolve(null);
            },
            error: function(xhr, textStatus, errorThrown) {
                console.log(xhr);
            }
        })
    })
    let result = await promise;
    return (result);
}
async function estdeclarant() {
    var contactId = $("#contactId").val();
    var recordId = $("#recordId").val();
    let promise = new Promise((resolve, reject) => {
        webapi.safeAjax({
            type: "GET",
            url: "/_api/lcl_irritants(" + recordId + ")?$select=_lcl_declarant_value",
            contentType: "application/json",
            headers: {
                "Prefer": "odata.include-annotations=*"
            },
            success: function(data, textStatus, xhr) {
                var result = data;
                console.log(result);
                var lcl_declarant = result["_lcl_declarant_value"]; // Lookup
                if (lcl_declarant == contactId) resolve(true);
                else resolve(false);
            },
            error: function(xhr, textStatus, errorThrown) {
                console.log(xhr);
            }
        });
    })
    let result = await promise;
    return (result);
}
async function Statutirritant() {
    var recordId = $("#recordId").val();
    let promise = new Promise((resolve, reject) => {
        webapi.safeAjax({
            type: "GET",
            url: "/_api/lcl_irritants(" + recordId + ")?$select=statecode",
            contentType: "application/json",
            headers: {
                "Prefer": "odata.include-annotations=*"
            },
            success: function(data, textStatus, xhr) {
                var result = data;
                console.log(result);
                // Columns
                var lcl_irritantid = result["lcl_irritantid"]; // Guid
                var statecode = result["statecode"]; // State
                resolve(statecode);
                var statecode_formatted = result["statecode@OData.Community.Display.V1.FormattedValue"];
            },
            error: function(xhr, textStatus, errorThrown) {
                console.log(xhr);
            }
        });
    })
    let result = await promise;
    return (result);
}
async function estabonné() {
    var contactId = $("#contactId").val();
    var recordId = $("#recordId").val();
    let promise = new Promise((resolve, reject) => {
        webapi.safeAjax({
            type: "GET",
            url: "/_api/lcl_abonnements?$filter=(_lcl_collaborateur_value eq " + contactId + " and _lcl_irritant_value eq " + recordId + " and lcl_type eq 851890000 and statecode eq 0)",
            contentType: "application/json",
            headers: {
                "Prefer": "odata.include-annotations=*"
            },
            success: function(data, textStatus, xhr) {
                var results = data;
                if (results.value.length > 0) resolve(results.value[0]["lcl_abonnementid"]);
                else resolve(null);
            },
            error: function(xhr, textStatus, errorThrown) {
                console.log(xhr);
            }
        });
    })
    let result = await promise;
    return (result);
}
function Libbtnabonnement() {
    estabonné().then(response => {
        if (response == null) {
            $("#btnabonnement").click(function() {
                toggleTextColor(this);
                SuivreIrritant();
            });
            $("#btnabonnement").html('Suivre');
        } else {
            $("#btnabonnement").click(function() {
                   toggleTextColor(this);
                NeplussuivreIrritantform();
            });
            $("#btnabonnement").html('Ne plus suivre');
        }
    });
}
function Libbtnliker() {
    estdeclarant().then(response => {
        if (response == true) {
            $("#btnlike").css('display', 'none');
        } else {
            aliker().then(response => {
                if (response == null) {
                    $("#btnlike").click(function() {
                        toggleTextColor(this);
                         var recordId = $("#recordId").val();
    LikerIrritantform(recordId)
    
                    });
                    $("#btnlike").html('Like');
                } else {
                    $("#btnlike").click(function() {
                        toggleTextColor(this);
                        NepaslikerIrritantform();
                    });
                    $("#btnlike").html('Dislike');
                }
            });
        }
    });
}
function Libbtndeactiver() {
    Statutirritant().then(response => {
        if (response == 0) {
            $("#btnndeactiver").click(function() {
                   toggleTextColor(this);
                Changerstatutirritant(1);
            });
            $("#btnndeactiver").html('Désactiver');
            $("#btnndeactiver").attr('class', 'btn btn-danger');
        } else {
            $("#btnndeactiver").click(function() {
                   toggleTextColor(this);
                Changerstatutirritant(0);
            });
            $("#btnndeactiver").html('Activer');
            $("#btnndeactiver").attr('class', 'btn btn-success');
        }
    });
}
function NepasLikerIrritant(response) {
    webapi.safeAjax({
        type: "DELETE",
        url: "/_api/lcl_abonnements(" + response + ")",
        contentType: "application/json",
        success: function(data, textStatus, xhr) {
            window.location.reload();
        },
        error: function(xhr, textStatus, errorThrown) {
            console.log(xhr);
        }
    });
}

function NeplussuivreIrritant(recordid) {
    var contactId = $("#contactId").val();
const index = abonnements.indexOf(recordid);
if (index > -1) { // only splice array when item is found
  abonnements.splice(index, 1); // 2nd parameter means remove one item only
}





    webapi.safeAjax({
	type: "GET",
	url: "/_api/lcl_abonnements?$filter=(lcl_type eq 851890000 and _lcl_collaborateur_value eq "+contactId+" and _lcl_irritant_value eq "+recordid+" and statecode eq 0)",
	contentType: "application/json",
	headers: {
		"Prefer": "odata.include-annotations=*"
	},
	success: function (data, textStatus, xhr) {
		var results = data;
		console.log(results);
		for (var i = 0; i < results.value.length; i++) {
            
			var result = results.value[i];
			// Columns
			var lcl_abonnementid = result["lcl_abonnementid"]; // Guid
if(mesirritants.includes(recordid)){




            var record = {};
record.statecode = 1; // State

webapi.safeAjax({
	type: "PATCH",
	contentType: "application/json",
	url: "/_api/lcl_abonnements("+lcl_abonnementid+")",
	data: JSON.stringify(record),
	success: function (data, textStatus, xhr) {
		    Getlistabonnement().then(response => {
 Getlistlike().then(response => {
     Getlistmesirritants().then(response => {
remplirDataTableexemple();
Libbtnabonnement();
     });
        });
        });
	},
	error: function (xhr, textStatus, errorThrown) {
		console.log(xhr);
	}
});
}else{
webapi.safeAjax({
	type: "DELETE",
	url: "/_api/lcl_abonnements("+lcl_abonnementid+")",
	contentType: "application/json",
	success: function (data, textStatus, xhr) {
		    Getlistabonnement().then(response => {
 Getlistlike().then(response => {
     Getlistmesirritants().then(response => {
remplirDataTableexemple();
Libbtnabonnement();
     });
        });
        });
	},
	error: function (xhr, textStatus, errorThrown) {
		console.log(xhr);
	}
});

}
		}
	},
	error: function (xhr, textStatus, errorThrown) {
		console.log(xhr);
	}
});

}




function NeplussuivreIrritantform(){
        var recordId = $("#recordId").val();
NeplussuivreIrritant(recordId);
}

function SuivreIrritant() {
    var contactId = $("#contactId").val();
    var recordId = $("#recordId").val();

    webapi.safeAjax({
	type: "GET",
	url: "/_api/lcl_abonnements?$filter=(lcl_type eq 851890000 and _lcl_collaborateur_value eq "+contactId+" and _lcl_irritant_value eq "+recordId+" and statecode eq 1)",
	contentType: "application/json",
	headers: {
		"Prefer": "odata.include-annotations=*"
	},
	success: function (data, textStatus, xhr) {
		var results = data;
		console.log(results);
        if (results.value.length==0){
var record = {};
record["lcl_Collaborateur@odata.bind"] = "/contacts("+contactId+")"; // Lookup
record["lcl_irritant@odata.bind"] = "/lcl_irritants("+recordId+")"; // Lookup
record.lcl_type = 851890000; // Choice

webapi.safeAjax({
	type: "POST",
	contentType: "application/json",
	url: "/_api/lcl_abonnements",
	data: JSON.stringify(record),
	success: function (data, textStatus, xhr) {
if(!likes.includes(recordId)){

                    LikerIrritantform(recordId);

}else{
                    window.location.reload();

}
	},
	error: function (xhr, textStatus, errorThrown) {
		console.log(xhr);
	}
});
        }else
		for (var i = 0; i < results.value.length; i++) {
			var result = results.value[i];
			// Columns
			var lcl_abonnementid = result["lcl_abonnementid"]; // Guid
            var record = {};
record.statecode = 0; // State

webapi.safeAjax({
	type: "PATCH",
	contentType: "application/json",
	url: "/_api/lcl_abonnements("+lcl_abonnementid+")",
	data: JSON.stringify(record),
	success: function (data, textStatus, xhr) {
if(!likes.includes(recordId)){

                    LikerIrritantform(recordId);

}else{
                    window.location.reload();

}
	},
	error: function (xhr, textStatus, errorThrown) {
		console.log(xhr);
	}
});
		}
	},
	error: function (xhr, textStatus, errorThrown) {
		console.log(xhr);
	}
});

}


function LikerIrritant() {
   
}
function LikerIrritantform(recordid) {
    var contactId = $("#contactId").val();
    var record = {};
    record["lcl_Collaborateur@odata.bind"] = "/contacts(" + contactId + ")"; // Lookup
    record["lcl_irritant@odata.bind"] = "/lcl_irritants(" + recordid + ")"; // Lookup
    record.lcl_type = 851890001; // Choice
    webapi.safeAjax({
        type: "POST",
        contentType: "application/json",
        url: "/_api/lcl_abonnements",
        data: JSON.stringify(record),
        success: function(data, textStatus, xhr) {
                    window.location.reload();

        },
        error: function(xhr, textStatus, errorThrown) {
        }
    });
}

function LikerIrritant(recordid) {
    var contactId = $("#contactId").val();
    var record = {};
    record["lcl_Collaborateur@odata.bind"] = "/contacts(" + contactId + ")"; // Lookup
    record["lcl_irritant@odata.bind"] = "/lcl_irritants(" + recordid + ")"; // Lookup
    record.lcl_type = 851890001; // Choice
    webapi.safeAjax({
        type: "POST",
        contentType: "application/json",
        url: "/_api/lcl_abonnements",
        data: JSON.stringify(record),
        success: function(data, textStatus, xhr) {
		    Getlistabonnement().then(response => {
 Getlistlike().then(response => {
     Getlistmesirritants().then(response => {
remplirDataTableexemple();
     });
        });
        });
        },
        error: function(xhr, textStatus, errorThrown) {
        }
    });
}
function NepaslikerIrritantform(){
       var recordId = $("#recordId").val();
 var contactId = $("#contactId").val();
const index = likes.indexOf(recordId);
if (index > -1) { // only splice array when item is found
  likes.splice(index, 1); // 2nd parameter means remove one item only
}

webapi.safeAjax({
	type: "GET",
	url: "/_api/lcl_abonnements?$filter=(lcl_type eq 851890001 and _lcl_irritant_value eq "+recordId+" and _lcl_collaborateur_value eq "+contactId+")",
	contentType: "application/json",
	headers: {
		"Prefer": "odata.include-annotations=*"
	},
	success: function (data, textStatus, xhr) {
		var results = data;
		console.log(results);
		for (var i = 0; i < results.value.length; i++) {
			var result = results.value[i];
			// Columns
			var lcl_abonnementid = result["lcl_abonnementid"]; // Guid
            webapi.safeAjax({
	type: "DELETE",
	url: "/_api/lcl_abonnements("+lcl_abonnementid+")",
	contentType: "application/json",
	success: function (data, textStatus, xhr) {
                    window.location.reload();

	},
	error: function (xhr, textStatus, errorThrown) {
		console.log(xhr);
	}
});
		}
	},
	error: function (xhr, textStatus, errorThrown) {
		console.log(xhr);
	}
});
}

function NepaslikerIrritant(recordid) {
    var contactId = $("#contactId").val();
const index = likes.indexOf(recordid);
if (index > -1) { // only splice array when item is found
  likes.splice(index, 1); // 2nd parameter means remove one item only
}

webapi.safeAjax({
	type: "GET",
	url: "/_api/lcl_abonnements?$filter=(lcl_type eq 851890001 and _lcl_irritant_value eq "+recordid+" and _lcl_collaborateur_value eq "+contactId+")",
	contentType: "application/json",
	headers: {
		"Prefer": "odata.include-annotations=*"
	},
	success: function (data, textStatus, xhr) {
		var results = data;
		console.log(results);
		for (var i = 0; i < results.value.length; i++) {
			var result = results.value[i];
			// Columns
			var lcl_abonnementid = result["lcl_abonnementid"]; // Guid
            webapi.safeAjax({
	type: "DELETE",
	url: "/_api/lcl_abonnements("+lcl_abonnementid+")",
	contentType: "application/json",
	success: function (data, textStatus, xhr) {
		    Getlistabonnement().then(response => {
 Getlistlike().then(response => {
     Getlistmesirritants().then(response => {
remplirDataTableexemple();
     });
        });
        });
	},
	error: function (xhr, textStatus, errorThrown) {
		console.log(xhr);
	}
});
		}
	},
	error: function (xhr, textStatus, errorThrown) {
		console.log(xhr);
	}
});
}
function SabonnerIrritant(recordid) {
    debugger;
    var contactId = $("#contactId").val();
    webapi.safeAjax({
	type: "GET",
	url: "/_api/lcl_abonnements?$filter=(lcl_type eq 851890000 and _lcl_collaborateur_value eq "+contactId+" and _lcl_irritant_value eq "+recordid+" and statecode eq 1)",
	contentType: "application/json",
	headers: {
		"Prefer": "odata.include-annotations=*"
	},
	success: function (data, textStatus, xhr) {
		var results = data;
		console.log(results);
        if (results.value.length==0){
var record = {};
record["lcl_Collaborateur@odata.bind"] = "/contacts("+contactId+")"; // Lookup
record["lcl_irritant@odata.bind"] = "/lcl_irritants("+recordid+")"; // Lookup
record.lcl_type = 851890000; // Choice

webapi.safeAjax({
	type: "POST",
	contentType: "application/json",
	url: "/_api/lcl_abonnements",
	data: JSON.stringify(record),
	success: function (data, textStatus, xhr) {
		    Getlistabonnement().then(response => {
 Getlistlike().then(response => {
     Getlistmesirritants().then(response => {

if(!likes.includes(recordid))
            LikerIrritant(recordid)
        else
remplirDataTableexemple();
     });
        });
        });
	},
	error: function (xhr, textStatus, errorThrown) {
		console.log(xhr);
	}
});
        }else
		for (var i = 0; i < results.value.length; i++) {
			var result = results.value[i];
			// Columns
			var lcl_abonnementid = result["lcl_abonnementid"]; // Guid
            var record = {};
record.statecode = 0; // State

webapi.safeAjax({
	type: "PATCH",
	contentType: "application/json",
	url: "/_api/lcl_abonnements("+lcl_abonnementid+")",
	data: JSON.stringify(record),
	success: function (data, textStatus, xhr) {
		    Getlistabonnement().then(response => {
 Getlistlike().then(response => {
     Getlistmesirritants().then(response => {
remplirDataTableexemple();
     });
        });
        });
	},
	error: function (xhr, textStatus, errorThrown) {
		console.log(xhr);
	}
});
		}
	},
	error: function (xhr, textStatus, errorThrown) {
		console.log(xhr);
	}
});

}
    function remplirDataTableexemple() {
        debugger;
        var filter = ""
        var recordId = $("#recordId").val();
        var lcl_sousdomaine = $("#lcl_sousdomaine").val();
        if (lcl_sousdomaine.length == 36) filter = filter + "and _lcl_sousdomaine_value eq " + lcl_sousdomaine;
        var lcl_domaine = $("#lcl_domaine").val();
        if ((lcl_domaine.length == 36) && (filter == "")) filter = filter + "and _lcl_domaine_value eq " + lcl_domaine;
        var urlapi = "/_api/lcl_irritants?$select=lcl_irritantid,lcl_synthsecasclient,lcl_name&$filter=((lcl_irritantid ne " + recordId + " and statecode eq 0" + filter + ") and (lcl_statutdelirritant eq 851890003 or lcl_statutdelirritant eq 851890005 or lcl_statutdelirritant eq 851890004))";
        webapi.safeAjax({
            type: "GET",
            url: urlapi,
            contentType: "application/json",
            headers: {
                "Prefer": "odata.include-annotations=*"
            },
            success: function(data, textStatus, xhr) {
                var results = data;
                console.log("remplirDataTableexemple length" + results.value.length)
                $("#btnModalIrritant").html("Irritants similaires (" + results.value.length + ")");
                remplirDataTableIrritant(data.value);
            },
            error: function(xhr, textStatus, errorThrown) {
                console.log(xhr);
            }
        });
    }



    $(document).on("click", "#NeplussuivreIrritant", function() {
   NeplussuivreIrritant($(this).data("id"));
});
$(document).on("click", "#SabonnerIrritant", function() {
   SabonnerIrritant($(this).data("id"));
});
$(document).on("click", "#NepaslikerIrritant", function() {
   NepaslikerIrritant($(this).data("id"));
});
$(document).on("click", "#LikerIrritant", function() {
   LikerIrritant($(this).data("id"));
});

function Libbtngrid(lcl_irritantid){
    let btnabonnement=""
    let btnlike=""

    if (abonnements.includes(lcl_irritantid))
        btnabonnement=btnabonnement+"<button title='Ne plus suivre ' style='border:1px solid #272e80; background-color: transparent;' type='button' type='button' class='btn btn-danger' id='NeplussuivreIrritant' data-id='" + lcl_irritantid + "'>"+icondesabon+"</button>";
    else
                btnabonnement=btnabonnement+"<button title='Suivre ' style='border:1px solid #272e80; background-color: transparent;' type='button' type='button' class='btn btn-success' id='SabonnerIrritant' data-id='" + lcl_irritantid + "'>"+iconsuivi+"</button>";
         if(!mesirritants.includes(lcl_irritantid)){
  if (likes.includes(lcl_irritantid))
        btnlike=btnlike+"<button title='Retirer la mention like ' style='border:1px solid #272e80; background-color: transparent;' type='button' type='button' class='btn btn-danger' id='NepaslikerIrritant' data-id='" + lcl_irritantid + "'>"+icondislike+"</button>";
    else
                btnlike=btnlike+"<button title='Liker ' style='border:1px solid #272e80; background-color: transparent;' type='button' type='button' class='btn btn-success' id='LikerIrritant' data-id='" + lcl_irritantid + "'>"+iconlike+"</button>";

         }
  return btnabonnement+btnlike;
//"<button type='button' class='btn btn-primary' onclick=SabonnerIrritant('" + row.lcl_irritantid + "')>S'abonner</button>" + "<button type='button' class='btn btn-secondary' onclick=LikerIrritant('" + row.lcl_irritantid + "')>Liker</button>";
}
    function remplirDataTableIrritant(recordsexampleirritant) {
        var table = $('#exampleirritant').DataTable({
            language: {
                url: "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json"
            },
            data: recordsexampleirritant,
            columns: [{
                data: "lcl_synthsecasclient",
                title: "Synthèse cas client"
            }, {
                data: null,
                render: function(data, type, row) {
                    return Libbtngrid(row.lcl_irritantid) 
                }
            }],
            destroy: true
        });
        // Double clic sur une ligne
        $('#exampleirritant tbody').on('dblclick', 'tr', function() {
            let data = table.row(this).data();
            if (data) {
                // Ou appeler ta fonction :
                Modifierirritant(data.lcl_irritantid);
            }
        });
    }
window.onload = function() {

    (function(webapi, $) {
        function safeAjax(ajaxOptions) {
            var deferredAjax = $.Deferred();
            shell.getTokenDeferred().done(function(token) {
                // add headers for AJAX
                if (!ajaxOptions.headers) {
                    $.extend(ajaxOptions, {
                        headers: {
                            "__RequestVerificationToken": token
                        }
                    });
                } else {
                    ajaxOptions.headers["__RequestVerificationToken"] = token;
                }
                $.ajax(ajaxOptions).done(function(data, textStatus, jqXHR) {
                    validateLoginSession(data, textStatus, jqXHR, deferredAjax.resolve);
                }).fail(deferredAjax.reject); //AJAX
            }).fail(function() {
                deferredAjax.rejectWith(this, arguments); // on token failure pass the token AJAX and args
            });
            return deferredAjax.promise();
        }
        webapi.safeAjax = safeAjax;
    })(window.webapi = window.webapi || {}, jQuery)
    initialiserBoutonVue();
    setbtncolor();
    Libbtnabonnement();
    Libbtnliker();
    Libbtndeactiver();
    remplirDataTableHistorique();
    remplirDataTableabonnement();
    remplirDataTablelike();
commentairesfields();
		    Getlistabonnement().then(response => {
 Getlistlike().then(response => {
     Getlistmesirritants().then(response => {
    remplirDataTableexemple();
     });
        });
        });
    $("#lcl_datedersolutionprvisionnelleouralise_datepicker_description").on("change", function() {
        let newDate = $(this).val();
    });
    $("#lcl_sousdomaine").change(function() {
        var lcl_sousdomaine = $("#lcl_sousdomaine").val();
        if (lcl_sousdomaine.length == 36) {
            remplirDataTableexemple();
            
            $('#ModalIrritant').modal('toggle')
        }
    });
    $("#lcl_domaine").change(function() {
        var lcl_domaine = $("#lcl_domaine").val();
        if (lcl_domaine.length == 36) remplirDataTableexemple();
    });
    estabonné().then(response => {
        if (response == null) {
            $('#btnsabonner').css("visibility", "visible");
            $('#btndeabonner').css("visibility", "hidden");
        } else {
            $('#btndeabonner').css("visibility", "visible");
            $('#btnsabonner').css("visibility", "hidden");
            $('#btndeabonner').click(function() {
                   toggleTextColor(this);
                webapi.safeAjax({
                    type: "DELETE",
                    url: "/_api/lcl_abonnements(" + response + ")",
                    contentType: "application/json",
                    success: function(data, textStatus, xhr) {
                        window.location.reload();
                    },
                    error: function(xhr, textStatus, errorThrown) {
                        console.log(xhr);
                    }
                });
            });
        }
    });
    aliker().then(response => {
        if (response == null) {
            $('#btnliker').css("visibility", "visible");
            $('#btndislike').css("visibility", "hidden");
        } else {
            $('#btndislike').css("visibility", "visible");
            $('#btnliker').css("visibility", "hidden");
            $('#btndislike').click(function() {
                   toggleTextColor(this);
                webapi.safeAjax({
                    type: "DELETE",
                    url: "/_api/lcl_abonnements(" + response + ")",
                    contentType: "application/json",
                    success: function(data, textStatus, xhr) {
                        window.location.reload();
                    },
                    error: function(xhr, textStatus, errorThrown) {
                        console.log(xhr);
                    }
                });
            });
        }
    });
    $("#lcl_declarant").change(function() {
   var lcl_declarant = $("#lcl_declarant").val();
webapi.safeAjax({
	type: "GET",
	url: "/_api/contacts("+lcl_declarant+")?$select=_lcl_cdrniveau30_value,emailaddress2,lastname,firstname,telephone2",
	contentType: "application/json",
	headers: {
		"Prefer": "odata.include-annotations=*"
	},
	success: function (data, textStatus, xhr) {
		var result = data;
		console.log(result);
		// Columns
			var contactid = result["contactid"]; // Guid
		var lcl_cdrniveau30 = result["_lcl_cdrniveau30_value"]; // Lookup
		var lcl_cdrniveau30_formatted = result["_lcl_cdrniveau30_value@OData.Community.Display.V1.FormattedValue"];
		var lcl_cdrniveau30_lookuplogicalname = result["_lcl_cdrniveau30_value@Microsoft.Dynamics.CRM.lookuplogicalname"];
		var emailaddress2 = result["emailaddress2"]; // Text
		var telephone2 = result["telephone2"]; // Text
         $("#lcl_maildudclarant").val(emailaddress2);
         $("#lcl_tlphonedudclarant").val(telephone2);


                         $("#lcl_unitdaffectation_name").val(lcl_cdrniveau30_formatted).trigger("change");
        $("#lcl_unitdaffectation").val(lcl_cdrniveau30);
        $("#lcl_unitdaffectation_entityname").val(lcl_cdrniveau30_lookuplogicalname);
        
	},
	error: function (xhr, textStatus, errorThrown) {
		console.log(xhr);
	}
});
       });
    $("#lcl_macroetape").change(function() {
        AutoRemplirParcour();
    });
    $("#lcl_parcoure").change(function() {
         $("#lcl_macroetape_name").val(null).trigger("change");
            $("#lcl_macroetape").val(null);
            $("#lcl_macroetape_entityname").val(null);
            
          
            $("#lcl_resolveur_name").val(null).trigger("change");
            $("#lcl_resolveur").val(null);
            $("#lcl_resolveur_entityname").val(null);
           
    });
    
    setdoublonvisibility();
    

       $("#lcl_statutdelirritant").change(function() {
setdoublonvisibility();

       });
          var firslcl_datedersolutionprvisionnelleouralise = $("#lcl_datedersolutionprvisionnelleouralise").val();
          if($("#lcl_datedersolutionprvisionnelleouralise").val()!=null)
            {
    $('#UpdateButton').removeAttr('onclick');
    $('#UpdateButton').click(function() {
           toggleTextColor(this);
        debugger;
   var lcl_datedersolutionprvisionnelleouralise = $("#lcl_datedersolutionprvisionnelleouralise").val();
 var lcl_datedapparition = $("#lcl_datedapparition").val();

   
   var lcl_nreferencemere = $("#lcl_nreferencemere").val();
   
        var lcl_statutdelirritant = $("#lcl_statutdelirritant").val();

        var today = new Date();
var lcl_datedapparitiondate = new Date(lcl_datedapparition);

if(today < lcl_datedapparitiondate){
alert("Il faut que la date d'apparition soit antérieure ou égale à la date actuelle.");
return;
}


        if((lcl_statutdelirritant==851890005)&&(lcl_datedersolutionprvisionnelleouralise=="")&&(firslcl_datedersolutionprvisionnelleouralise=="")){
alert("La Date de résolution prévisionnelle ou réalisée n'est pas renseignée");
return;
        }
       if((lcl_statutdelirritant==851890001)&&(lcl_nreferencemere=="")){
alert("Merci de renseigner un numéro de référence Mére");
return;
        }
        
            
 if  ((lcl_datedersolutionprvisionnelleouralise!="")&&(firslcl_datedersolutionprvisionnelleouralise==""))
        $("#lcl_statutdelirritant").val(851890005);
 if  ((lcl_datedersolutionprvisionnelleouralise=="")&&(firslcl_datedersolutionprvisionnelleouralise!=""))
        $("#lcl_statutdelirritant").val(851890004);
         submitform();
    });
            };

};