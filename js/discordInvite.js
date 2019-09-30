var discordInvite = discordInvite || function() {
    var i = {},
        e = "1.0";
    return {
        init: function(e) {
			e.inviteCode = void 0 !== e.inviteCode && e.inviteCode, e.title = void 0 !== e.title ? e.title : "", e.introText = void 0 !== e.introText ? e.introText : "YOU'VE BEEN INVITED TO JOIN A SERVER", e.joinText = void 0 !== e.joinText ? e.joinText : "Join", e.joinedText = void 0 !== e.joinedText ? e.joinedText : "Joined", e.width = void 0 !== e.width ? e.width : 400, e.miniMode = void 0 !== e.miniMode && e.miniMode, e.hideIntro = void 0 !== e.hideIntro && e.hideIntro, e.targetElement = void 0 !== e.targetElement ? e.targetElement : "#discordInviteBox", i.inviteCode = e.inviteCode, i.title = e.title, i.introText = e.introText, i.joinText = e.joinText, i.joinedText = e.joinedText, i.miniMode = e.miniMode, i.hideIntro = e.hideIntro, i.width = e.width, i.targetElement = e.targetElement
        
            const discordInvites = $("#discordInvitesBox");
			const url = "https://discordapp.com/api/v6/invite/" + i.inviteCode + "?with_counts=true";
			fetch(url)
			.then((resp) => resp.json())
			.then(function(data) {
				let guild = data.guild;
				if(e.site){
					var joinButtons = '<div><a type="button"  style="background-color: #5F7C8C" class="callToAction siteAdded" href="' + e.site +'" target="_blank">'+
						'<div class="noselect buttonText">Site</div>'+
						'</a>'+ 
						'<a type="button" class="callToAction siteAdded" href="https://discordapp.com/invite/' + e.inviteCode +'" target="_blank">'+
						'<div class="noselect buttonText">Join</div>'+
						'</a></div>';	
				}else{
					var joinButtons = '<a type="button" class="callToAction" href="https://discordapp.com/invite/' + e.inviteCode +'" target="_blank">'+
						'<div class="noselect buttonText">' + e.joinText + '</div>'+
						'</a>';
				}
				var t = 
				'<div class="discordInvite" style="width: ' + i.width + ';">'+
					'<div class="discordData">'+
						'<a class="serverImg loadHidden" href="https://discordapp.com/invite/' + e.inviteCode +'" target="_blank" style="gray;background: url('+`&quot;https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png&quot;`+') 50% 50% / 100% 100% repeat scroll rgb(54, 57, 63); display: block;"></a>'+
						'<div class="discordInfo">'+
							'<a  href="https://discordapp.com/invite/' + e.inviteCode +'" target="_blank" class="serverNameBox"><span style="color: #f6f6f7" class="noselect serverName" >' + `${guild.name}` + '</span></a>'+
							'<div class="status loadHidden" style="display: block;">'+
								'<div class="statusIndicators noselect"><i class="onlineInd"></i><span class="numOnline">'+`${data.approximate_presence_count}`+' Online</span><i class="offlineInd"></i><span class="numTotal">'+`${data.approximate_member_count}`+' Members</span></div>'+
							'</div>'+
							'<div class="serverDescriptionBox"><span class="noselect descriptionText" >' + e.introText + '</span></div>'+
						'</div>'+
						 joinButtons +
					'</div>'+
				'</div>';
				discordInvites.append(t);
			})
			.catch(function(error) {
			}); 
				
        }
    }
}();
