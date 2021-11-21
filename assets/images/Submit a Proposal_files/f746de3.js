(function(applet){DeleteSurveyModalService.ngName="fe.components.profile.delete-survey-modal.service";DeleteSurveyModalService.$inject=["eoModal"];function DeleteSurveyModalService(eoModal){return{open:function(){var modal=eoModal.custom({templateUrl:applet.buildInternalAssetPath("@OdeskCfeCategoriesBundle/js/components/DeleteSurveyModal/DeleteSurveyModal.tmpl.html"),backdrop:"static",size:"md",controller:DeleteSurveyModalCtrl.ngName,controllerAs:"vm"});return modal.result}}}DeleteSurveyModalCtrl.ngName="fe.components.profile.delete-survey-modal.ctrl";DeleteSurveyModalCtrl.$inject=["$modalInstance","eoModelFactory","oLog"];function DeleteSurveyModalCtrl($modalInstance,eoModelFactory,oLog){var vm=this;vm.reason="";vm.otherReason="";vm.onSubmit=function(){$modalInstance.close();var reason=vm.reason;if(reason==="other"){reason=vm.otherReason}var logData={location:"categories",sublocation:"freelancer",event:"serviceProfileDelete",data:[{type:"answer",value:reason}]};var logEvent=eoModelFactory.get("Event",logData);oLog.event(logEvent)};vm.onClose=function(){$modalInstance.dismiss("cancel")}}angular.module("fe.components.profile.delete-survey-modal",["components.core.log"]).factory(DeleteSurveyModalService.ngName,DeleteSurveyModalService).controller(DeleteSurveyModalCtrl.ngName,DeleteSurveyModalCtrl)})(Applet);
(function(applet){DenialSurveyModalService.ngName="fe.components.profile.denial-survey-modal.service";DenialSurveyModalService.$inject=["eoModal"];function DenialSurveyModalService(eoModal){return{open:function(){var modal=eoModal.custom({templateUrl:applet.buildInternalAssetPath("@OdeskCfeCategoriesBundle/js/components/DenialSurveyModal/DenialSurveyModal.tmpl.html"),backdrop:"static",size:"md",controller:DenialSurveyModalCtrl.ngName,controllerAs:"vm"});return modal.result}}}DenialSurveyModalCtrl.ngName="fe.components.profile.denial-survey-modal.ctrl";DenialSurveyModalCtrl.$inject=["$modalInstance","eoModelFactory","oLog"];function DenialSurveyModalCtrl($modalInstance,eoModelFactory,oLog){var vm=this;vm.reason="";vm.otherReason="";vm.onSubmit=function(){$modalInstance.close();var reason=vm.reason;if(reason==="other"){reason=vm.otherReason}var logData={location:"categories",sublocation:"freelancer",event:"serviceProfileUnpublish",data:[{type:"answer",value:reason}]};var logEvent=eoModelFactory.get("Event",logData);oLog.event(logEvent)};vm.onClose=function(){$modalInstance.dismiss("cancel")}}angular.module("fe.components.profile.denial-survey-modal",["components.core.log"]).factory(DenialSurveyModalService.ngName,DenialSurveyModalService).controller(DenialSurveyModalCtrl.ngName,DenialSurveyModalCtrl)})(Applet);
angular.module("cfe.components.proposal",[]).constant("cfeApplicationMatchType",{IRRELEVANT:1,ELIGIBLE:2,MATCHED:3});
(function(){ProposalNotifyCtrl.$inject=["$http","$window","cfeApplicationMatchType","eoModelFactory","oLog"];function ProposalNotifyCtrl($http,$window,MatchType,eoModelFactory,oLog){this.showMessage=false;this.serviceName="";this.serviceUid="";this.openingUid="";this.isOwner=true;this.http=$http;this.window=$window;this.matchType=MatchType;this.eoModelFactory=eoModelFactory;this.oLog=oLog}ProposalNotifyCtrl.prototype={$onChanges:function(changes){if(this.openingCiphertext){this.loadOpeningMatch()}},loadOpeningMatch:function(){var url="/api/v1/opening/"+this.openingCiphertext+"/service-match-status";var request=this.http.get(Applet.getBasePath()+url,{params:{personNid:this.personNid,withMatchingRate:1}});this.isOwner=true;if(this.personNid){this.isOwner=Applet.getUser().getNid()===this.personNid}request.then(function(response){if(!response||!response.data||!response.data.status){return}this.showMessage=response.data.status===this.matchType.MATCHED;this.serviceName=response.data.serviceName;this.serviceUid=response.data.serviceUID;this.openingUid=response.data.openingUID;if(this.onFetch){this.onFetch(response.data)}if(this.showMessage){var event=this.eoModelFactory.get("Event",{event:"impression",location:"submit_proposal",sublocation:"create_proposal",data:[{opening_id:this.openingUid,service_id:this.serviceUid}]});this.oLog.event(event)}}.bind(this))},goToProfile:function(){var url="/freelancers/";if(this.serviceUid){url+="?s="+this.serviceUid}var w=this.window.open(url,"_blank");if(w){w.focus()}var event=this.eoModelFactory.get("Event",{event:"click",location:"submit_proposal",sublocation:"submit_form",data:[{event_label:"click_prompt_review_specialized_profile",opening_id:this.openingUid,selected_profile:this.serviceUid}]});this.oLog.event(event)}};angular.module("cfe.components.proposal").component("cfeProposalNotification",{controller:ProposalNotifyCtrl,bindings:{openingCiphertext:"<",personNid:"<?",onFetch:"<?"},templateUrl:Applet.buildInternalAssetPath("@OdeskCfeCategoriesBundle/js/components/Proposal/ProposalNotify.html")})})();