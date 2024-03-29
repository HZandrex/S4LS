var discordInvite = discordInvite || function() {
    var i = {},
        e = "1.0";
    return {
        init: function(e) {
            e.inviteCode = void 0 !== e.inviteCode && e.inviteCode, e.title = void 0 !== e.title ? e.title : "", e.introText = void 0 !== e.introText ? e.introText : "YOU'VE BEEN INVITED TO JOIN A SERVER", e.joinText = void 0 !== e.joinText ? e.joinText : "Join", e.joinedText = void 0 !== e.joinedText ? e.joinedText : "Joined", e.width = void 0 !== e.width ? e.width : 400, e.miniMode = void 0 !== e.miniMode && e.miniMode, e.hideIntro = void 0 !== e.hideIntro && e.hideIntro, e.targetElement = void 0 !== e.targetElement ? e.targetElement : "#discordInvitesBox", i.inviteCode = e.inviteCode, i.title = e.title, i.introText = e.introText, i.joinText = e.joinText, i.joinedText = e.joinedText, i.miniMode = e.miniMode, i.hideIntro = e.hideIntro, i.width = e.width, i.targetElement = e.targetElement
        },
        render: function() {
            if (window.jQuery) d();
            else {
                var t = document.createElement("script");
                t.type = "text/javascript", t.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js", document.head.appendChild(t), t.onload = function() {
                    d()
                }
            }

            function d() {
                if (discordCode = i.inviteCode, discordCode && "" != discordCode) {
                    i.miniMode ? i.width = "auto" : "number" == typeof i.width && (i.width = i.width + "px");
                    var t = 
					'<div class="discordInvite" style="width: ' + i.width + ';">'+
						'<div class="discordData">'+
							'<div class="'+ i.inviteCode +' serverImg discordLink loadHidden" style="background: rgb(54, 57, 63) repeat scroll 50% 50% / 100% 100%;"></div>'+
							'<div class="discordInfo">'+
								'<div class="'+ i.inviteCode +' discordLink serverNameBox"><span class="'+ i.inviteCode +' noselect serverName">' + i.title + '</span></div>'+
								'<div class="status loadHidden">'+
									'<div class="statusIndicators noselect"><i class="onlineInd"></i><span class="'+ i.inviteCode +' numOnline">... Online</span><i class="offlineInd"></i><span class="'+ i.inviteCode +' numTotal">... Members</span></div>'+
								'</div>'+
								'<div class="serverDescriptionBox"><span class="noselect descriptionText" >' + i.introText + '</span></div>'+
							'</div>'+
							'<button type="button" class="discordLink callToAction">'+
								'<div class="noselect buttonText">' + i.joinText + '</div>'+
							'</button>'+
						'</div>'+
					'</div>',
                        d = '<div class="joinedDiscord">' + i.joinedText + '<svg name="Checkmark" width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" class="discordSVG"><g fill="none" fill-rule="evenodd" class="gDiscord"><polyline stroke="currentColor" stroke-width="2" points="3.5 9.5 7 13 15 5" class="discordPolyline"></polyline></g></svg></div>';
                    $(i.targetElement).append(t).attr("version", e), $.ajax({
                        url: "https://discordapp.com/api/v6/invite/" + discordCode + "?with_counts=true",
                        success: function(e) {
                            e.code;
                            var t = e.approximate_member_count.toLocaleString("en") + " Members",
                                o = e.approximate_presence_count.toLocaleString("en") + " Online",
                                n = e.guild.name,
                                r = "https://cdn.discordapp.com/icons/" + e.guild.id + "/" + e.guild.icon + ".png";
                            $("." + i.inviteCode +".serverName").html(n), $("." + i.inviteCode +".serverImg").css("background-image", "url(" + r + ")"), $("." + i.inviteCode +".numTotal").html(t), $("." + i.inviteCode +".numOnline").html(o), $("." + i.inviteCode +".discordLink").click(function() {
                                $(".callToAction").html(d).attr("class", "callToAction-clicked"), url = "https://discordapp.com/invite/" + i.inviteCode, window.open(url, "_blank")
                            }), $(".loadHidden").show(), i.miniMode && $(".offlineInd, .numTotal").hide(), i.hideIntro && $(".introText").hide()
                        },
                        error: function(i) {
                            $(".discordInvite").css("width", "auto");
                            var e = null;
                            void 0 !== i.responseJSON ? ($(".buttonText").html(i.responseJSON.message), $(".discordInfo").remove()) : ($(".discordData").remove(), e = !0), e ? $(".introText").html("ERROR: Invalid Data URL.") : $(".introText").html("An error has occurred."), $("#introText").css("margin", 0).show()
                        }
                    })
                } else $(i.targetElement).html("Error: Invalid Invite Code").addClass("discordInviteError").css("display", "inline-block")
					
            }
        }
    }
}();