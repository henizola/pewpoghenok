(this.webpackJsonptournament = this.webpackJsonptournament || []).push([
	[0],
	{
		102: function (t, n, e) {},
		107: function (t, n, e) {},
		110: function (t, n, e) {},
		113: function (t, n, e) {
			"use strict";
			e.r(n);
			var a,
				r,
				o,
				l,
				i,
				p,
				c,
				d,
				m = e(1),
				s = e.n(m),
				u = e(23),
				f = e.n(u),
				g = (e(99), e(100), e(101), e(65), e(9)),
				x = (e(102), e(12)),
				h = e(88),
				b = ["layout", "component"],
				v = function (t) {
					var n = t.layout,
						e = t.component,
						a = Object(h.a)(t, b);
					return s.a.createElement(
						x.a,
						Object.assign({}, a, {
							render: function (t) {
								return s.a.createElement(n, null, s.a.createElement(e, t));
							},
						})
					);
				},
				E = (e(107), e(142)),
				w = e(31),
				y = e(22),
				k = e(4),
				N = e(5),
				j = N.a.div(
					a ||
						(a = Object(k.a)([
							"\n\tposition: fixed;\n\ttop: 0;\n\tleft: 0;\n\tdisplay: grid;\n\tgrid-template-columns: 150px 1fr 330px;\n\tpadding: 12px 140px;\n\theight: 56px;\n\twidth: 100vw;\n\tbackground-color: #fff;\n\tz-index: 999999999999999999999999999999999999999999999999;\n\tbackground: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;\n\tbackground: #ffffff 0% 0% no-repeat padding-box;\n\tbox-shadow: 0px 3px 6px #00000029;\n\topacity: 1;\n\th1 {\n\t\tfont: var(--unnamed-font-style-normal) normal\n\t\t\tvar(--unnamed-font-weight-normal) var(--unnamed-font-size-18) /\n\t\t\tvar(--unnamed-line-spacing-27) var(--unnamed-font-family-poppins);\n\t\tletter-spacing: var(--unnamed-character-spacing-0);\n\t\tcolor: var(--unnamed-color-3f3f46);\n\t\ttext-align: left;\n\t\tfont: normal normal normal 18px/27px Poppins;\n\t\tletter-spacing: 0px;\n\t\tcolor: #3f3f46;\n\t}\n\t.right {\n\t\tdisplay: grid;\n\t\tgrid-template-columns: 80px 80px;\n\t\tgrid-gap: 40px;\n\t}\n\t.outline-red {\n\t\tbackground: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;\n\t\tborder: 1px solid var(---d44244);\n\t\tbackground: #ffffff 0% 0% no-repeat padding-box;\n\t\tborder: 1px solid #d44244;\n\t\tborder-radius: 15px;\n\t\twidth: 100%;\n\t\theight: 31px;\n\t\tborder: 1px solid #d44244;\n\t\ttext-align: center;\n\t\tpadding-top: 6px;\n\t\tcolor: #d44244;\n\t\tborder-radius: 8px;\n\t\tpadding-top: 4px;\n\t\tfont: var(--unnamed-font-style-normal) normal\n\t\t\tvar(--unnamed-font-weight-bold) var(--unnamed-font-size-14) /\n\t\t\tvar(--unnamed-line-spacing-21) var(--unnamed-font-family-poppins);\n\t\tletter-spacing: var(--unnamed-character-spacing-0-02);\n\t\tfont: normal normal bold 14px/21px Poppins;\n\t\tletter-spacing: 0.02px;\n\t}\n\t.fill-red {\n\t\tbackground: var(---d44244) 0% 0% no-repeat padding-box;\n\t\tbackground: #d44244 0% 0% no-repeat padding-box;\n\t\tborder-radius: 15px;\n\t\twidth: 100%;\n\t\theight: 31px;\n\t\tbackground-color: #d44244;\n\t\ttext-align: center;\n\t\tcolor: #fff;\n\t\tborder-radius: 8px;\n\t\tpadding-top: 4px;\n\t\tfont: var(--unnamed-font-style-normal) normal\n\t\t\tvar(--unnamed-font-weight-bold) var(--unnamed-font-size-14) /\n\t\t\tvar(--unnamed-line-spacing-21) var(--unnamed-font-family-poppins);\n\t\tletter-spacing: var(--unnamed-character-spacing-0-02);\n\t\tfont: normal normal bold 14px/21px Poppins;\n\t\tletter-spacing: 0.02px;\n\t}\n\t@media screen and (max-width: 600px) {\n\t\theight: fit-content;\n\t\tmax-height: 15vh;\n\t\tpadding: 10px;\n\t\tgrid-template-columns: 100px 1fr;\n\t\tmax-width: 100vw;\n\n\t\t.right {\n\t\t\tdisplay: flex;\n\t\t\tjustify-content: space-between;\n\t\t\twidth: 95vw;\n\t\t\tmargin-top: 15px;\n\t\t}\n\t}\n",
						]))
				),
				A = Object(w.a)("div")(function (t) {
					t.theme;
					return {
						position: "relative",
						background: "#F0F0F0",
						borderRadius: "8px",
						height: "31px",
						maxWidth: "376px!important",
						padding: "5px",
					};
				}),
				O = Object(w.a)("div")(function (t) {
					t.theme;
					return {
						fontSize: "22px",
						position: "absolute",
						pointerEvents: "none",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						right: "10px",
						top: "5px",
					};
				}),
				C = Object(w.a)(E.a)(function (t) {
					return {
						color: "inherit",
						fontSize: "22px",
						width: "100%",
						"& .MuiInputBase-input": {
							padding: "0",
							fontSize: "14px",
							paddingLeft: "10px",
							transition: t.theme.transitions.create("width"),
							width: "100%",
						},
					};
				}),
				S = function () {
					return s.a.createElement(
						j,
						null,
						s.a.createElement(
							g.b,
							{ to: "/" },
							s.a.createElement("h1", null, "PEWPOG")
						),
						s.a.createElement(
							A,
							null,
							s.a.createElement(O, null, s.a.createElement(y.a, null)),
							s.a.createElement(C, {
								placeholder: "Search\u2026",
								inputProps: { "aria-label": "search" },
							})
						),
						s.a.createElement(
							"div",
							{ className: "right" },
							s.a.createElement(
								g.b,
								{ to: "/sign-in", className: "outline-red" },
								"Log In"
							),
							s.a.createElement(
								g.b,
								{ to: "/sign-up", className: "fill-red" },
								"Sign up"
							)
						)
					);
				},
				P = function (t) {
					var n = t.children;
					return s.a.createElement(
						"main",
						null,
						s.a.createElement(S, null),
						s.a.createElement("div", { className: "main_body" }, n)
					);
				},
				z = e(6),
				G = N.a.div(
					r ||
						(r = Object(k.a)([
							"\n\t.hero {\n\t\twidth: 100vw;\n\t\theight: 400px;\n\t\tobject-fit: cover;\n\t}\n",
						]))
				),
				F = N.a.div(
					o ||
						(o = Object(k.a)([
							"\n\twidth: 100%;\n\tpadding: 32px 140px;\n\n\t.match-head {\n\t\tdisplay: flex;\n\t}\n\t.title {\n\t\ttext-align: left;\n\t\tfont: normal normal bold 24px/51px Poppins;\n\t\tletter-spacing: 0.01px;\n\t\tcolor: #3f3f46;\n\t\tline-height: 24px;\n\t\tpadding-top: 4px;\n\t}\n\t.filter {\n\t\tmargin: 6px 20px;\n\t\ttext-align: center;\n\t\tfont: normal normal 300 14px/21px Poppins;\n\t\tletter-spacing: 0.01px;\n\t\tcolor: #3f3f46;\n\t}\n\n\t.match-list {\n\t\tdisplay: grid;\n\t\tgrid-template-columns: 1fr 1fr 1fr;\n\t\tgrid-gap: 40px;\n\t\tmargin-top: 30px;\n\t}\n\t@media screen and (max-width: 600px) {\n\t\tpadding: 50px 5%;\n\t\t.match-list {\n\t\t\tgrid-template-columns: 1fr;\n\t\t\tmax-width: 90vw;\n\t\t}\n\t}\n",
						]))
				),
				I = N.a.div(
					l ||
						(l = Object(k.a)([
							"\n\twidth: 150px;\n\theight: 32px;\n\tfont-display: grid;\n\tgrid-template-columns: 1fr 1fr;\n\tbackground: var(--unnamed-color-fafafa) 0% 0% no-repeat padding-box;\n\tborder: 1px solid var(--unnamed-color-3b82f6);\n\tbackground: #fafafa 0% 0% no-repeat padding-box;\n\tborder: 1px solid #3b82f6;\n\tborder-radius: 8px;\n\toverflow: hidden;\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tbutton {\n\t\tborder: none;\n\t\tcolor: #a1a1aa;\n\t\twidth: 78px;\n\t\theight: 100%;\n\t\t/* UI Properties */\n\t\tbackground-color: transparent;\n\t\ttext-align: center;\n\t\tfont: normal normal 300 13px/20px Poppins;\n\t\tletter-spacing: 0.02px;\n\t}\n\t.selected {\n\t\tbackground: var(--unnamed-color-2865b3) 0% 0% no-repeat padding-box;\n\t\tbackground: #3b82f6 0% 0% no-repeat padding-box;\n\t\tcolor: #fff;\n\t\tfont: normal normal bold 13px/20px Poppins;\n\t\t/* border-radius: 8px 0px 0px 8px; */\n\t}\n",
						]))
				),
				D = N.a.div(
					i ||
						(i = Object(k.a)([
							"\n\twidth: 100%;\n\theight: fit-content;\n\tbackground: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;\n\tbackground: #ffffff 0% 0% no-repeat padding-box;\n\tbox-shadow: 0px 3px 10px #0000001f;\n\tborder-radius: 10px;\n\topacity: 1;\n\tpadding: 16px 24px;\n\t&:hover {\n\t\tbox-shadow: -3px 3px 0px #27272a;\n\t\tborder: 2px solid #27272a;\n\t}\n\t.space {\n\t\tdisplay: flex;\n\t\tjustify-content: space-between;\n\t}\n\t.name {\n\t\ttext-align: left;\n\t\tfont: normal normal 600 16px/25px Poppins;\n\t\tletter-spacing: 0.01px;\n\t\tcolor: #ef4444 !important;\n\t}\n\t.date {\n\t\ttext-align: left;\n\t\tfont: normal normal medium 14px/21px Poppins;\n\t\tletter-spacing: 0.01px;\n\t\tcolor: #3f3f46;\n\t}\n\t.bold {\n\t\ttext-align: left;\n\t\tfont: normal normal medium 14px/21px Poppins;\n\t\tletter-spacing: 0.01px;\n\t\tcolor: #3f3f46;\n\t}\n\t.user {\n\t\tdisplay: flex;\n\t\tp {\n\t\t\tmargin-left: 10px;\n\t\t}\n\t\timg {\n\t\t\twidth: 20px;\n\t\t\theight: 20px;\n\t\t}\n\t}\n\t.red {\n\t\twidth: 104px;\n\t\theight: 31px;\n\t\tborder: none;\n\t\tbackground: var(--unnamed-color-ef4444) 0% 0% no-repeat padding-box;\n\t\tbackground: #ef4444 0% 0% no-repeat padding-box;\n\t\tborder-radius: 8px;\n\n\t\ttext-align: center;\n\t\ttext-decoration: none;\n\t\tfloat: right;\n\n\t\tfont: normal normal bold 14px/21px Poppins;\n\t\tletter-spacing: 0.02px;\n\t\tcolor: #ffffff;\n\t}\n\t@media screen and (max-width: 600px) {\n\t\twidth: 87vw;\n\t}\n",
						]))
				),
				R = e(45),
				B = e.n(R),
				U = function (t) {
					var n = t.handleOpen;
					return s.a.createElement(
						D,
						null,
						s.a.createElement(
							"div",
							{ className: "space" },
							s.a.createElement("p", { className: "date" }, "07.01.22"),
							s.a.createElement("p", { className: "bold" }, "Loot: 3,000 pogs")
						),
						s.a.createElement(
							"div",
							{ className: "space" },
							s.a.createElement("p", { className: "date" })
						),
						s.a.createElement(
							g.b,
							{ to: "/match", className: "name" },
							"Tournament name. User defined. ",
							s.a.createElement("br", null),
							"Max 45 characters."
						),
						s.a.createElement("p", { className: "bold" }, "Pledge: 100 pogs"),
						s.a.createElement(
							"div",
							{ className: "space" },
							s.a.createElement(
								"button",
								{ className: "red", onClick: n },
								"Join"
							),
							s.a.createElement(
								"div",
								{ className: "user" },
								s.a.createElement("img", {
									src: B.a,
									alt: "",
									className: "avatar",
								}),
								s.a.createElement("p", null, "Username")
							)
						)
					);
				},
				V = e(77),
				L = e.n(V),
				K = e(144),
				q = e(141),
				Q = {
					position: "absolute",
					top: "55%",
					left: "50%",
					transform: "translate(-50%, -50%)",
					width: "425px",
					outline: "none",
					padding: "15px 49px",
					background: "#FFFFFF 0% 0% no-repeat padding-box",
					boxShadow: " 0px 3px 10px #0000001F",
					borderRadius: "15px",
				};
			function M(t) {
				var n = t.children,
					e = t.open,
					a = t.handleClose;
				return m.createElement(
					"div",
					null,
					m.createElement(
						q.a,
						{
							open: e,
							onClose: a,
							"aria-labelledby": "modal-modal-title",
							"aria-describedby": "modal-modal-description",
						},
						m.createElement(
							K.a,
							{ sx: Q, className: "cust-modal" },
							m.Children.map(n, function (t, n) {
								return m.createElement("div", { key: n }, t);
							})
						)
					)
				);
			}
			var Y,
				J,
				T,
				W,
				H,
				X,
				Z,
				_,
				$,
				tt,
				nt,
				et,
				at,
				rt,
				ot,
				lt,
				it,
				pt,
				ct,
				dt,
				mt,
				st,
				ut,
				ft = N.a.div(
					p ||
						(p = Object(k.a)([
							"\n\twidth: 100%;\n\theight: 60vh;\n\ttext-align: center;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-between;\n\twidth: 368px;\n\n\ttext-align: center;\n\t.close {\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tright: -20px;\n\t\tcolor: #fff;\n\t}\n\t@media screen and(max-width:600px) {\n\t\t.close {\n\t\t\tright: 20px;\n\t\t\tcolor: black;\n\t\t\tz-index: 999999999999;\n\t\t}\n\t}\n\t.title {\n\t\ttext-align: center;\n\t\tfont: normal normal normal 23px/34px Poppins;\n\t\tletter-spacing: 0px;\n\t\tcolor: #000000;\n\t}\n\t.sub-title {\n\t\ttext-align: center;\n\t\tfont: normal normal normal 16px/22px Source Sans Pro;\n\t\tletter-spacing: 0.01px;\n\t\tcolor: #000000;\n\t}\n\t.input {\n\t\twidth: 320px;\n\t\theight: 32px;\n\t\tborder: none;\n\t\tbackground-color: #f0f0f0;\n\t\tborder-radius: 8px;\n\t\tpadding-left: 10px;\n\t\tpadding-right: 20px;\n\t\tcolor: #0000008d;\n\n\t\t&:focus {\n\t\t\toutline: none;\n\t\t}\n\t}\n\t.user {\n\t\tdisplay: grid;\n\t\tgrid-template-columns: 20px 1fr 1fr;\n\t\tmargin-top: 24px;\n\t\tbackground: #f4f4f5 0% 0% no-repeat padding-box;\n\t\tbox-shadow: 0px 1px 1px #00000029;\n\t\tborder-radius: 8px;\n\t\tpadding: 10px 14px;\n\t\tpadding-bottom: 0;\n\t}\n\t.remove {\n\t\tcursor: pointer;\n\t\ttext-align: right;\n\t}\n\t.select:after {\n\t\tcolor: red !important;\n\t}\n\t.input-title {\n\t\tmargin-bottom: 2px;\n\t}\n\n\t.sub-title {\n\t\tfont-size: 16px;\n\t}\n\t@media screen and (max-width: 600px) {\n\t\tmax-width: 90vw;\n\t}\n\t.info {\n\t\tposition: relative;\n\t}\n\t.menu {\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tpadding: 10px;\n\t\tright: 0px;\n\t\tbackground: #ffffff 0% 0% no-repeat padding-box;\n\t\tbox-shadow: 0px 3px 10px #00000029;\n\t\tborder-radius: 10px;\n\t\twidth: 200px;\n\t\theight: 72px;\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tjustify-content: space-around;\n\t}\n\tp {\n\t\tfont-size: 14px;\n\t}\n\t.information {\n\t\ttext-align: left;\n\t\ttext-decoration: underline;\n\t\tfont: normal normal bold 17px/24px Source Sans Pro;\n\t\tletter-spacing: 0.02px;\n\t\tcolor: #2865b3;\n\t}\n",
						]))
				),
				gt = N.a.div(
					c ||
						(c = Object(k.a)([
							"\n\twidth: 100%;\n\theight: fit-content;\n\tmargin-top: 15px;\n\ttext-align: left;\n\tposition: relative;\n\tcolor: ",
							";\n\t.input {\n\t\twidth: 100%;\n\t\theight: 32px;\n\t\tbackground: #f4f4f5 0% 0% no-repeat padding-box;\n\t\tborder-radius: 5px;\n\t\tborder: ",
							";\n\n\t\tpadding: 5px;\n\t\t&:focus {\n\t\t\toutline: none;\n\t\t}\n\t}\n\t.warning {\n\t\tdisplay: ",
							";\n\t}\n\t.icon {\n\t\tposition: absolute;\n\t\tright: 10px;\n\t\ttop: 5px;\n\t\tfont-size: 25px;\n\t}\n",
						])),
					function (t) {
						return "invalid" === t.error
							? " #DC2626!important"
							: "valid" === t.error
							? " #4F8CE3"
							: "none";
					},
					function (t) {
						return "invalid" === t.error
							? "1px solid #DC2626!important"
							: "valid" === t.error
							? "1px solid #4F8CE3"
							: "none";
					},
					function (t) {
						return "invalid" === t.error ? "block" : "none";
					}
				),
				xt = N.a.div(
					d ||
						(d = Object(k.a)([
							"\n\twidth: 320px;\n\theight: 31px;\n\tbackground: #2865b3 0% 0% no-repeat padding-box;\n\tborder-radius: 8px;\n\tborder: none;\n\tcolor: #fff;\n\tpadding-top: 4px;\n\tmargin: 0 auto;\n\tmargin-top: 28px;\n\tcursor: pointer;\n\tfont: normal normal bold 14px/21px Poppins;\n\tletter-spacing: 0.02px;\n\tbackground: #f2f2f3 0% 0% no-repeat padding-box;\n\tborder-radius: 8px;\n\ttext-align: center;\n\tfont: normal normal bold 14px/21px Poppins;\n\tletter-spacing: 0.02px;\n\tcolor: #a1a1aa;\n\topacity: 1;\n",
						]))
				),
				ht = e(33),
				bt = e.n(ht),
				vt = function (t) {
					var n = t.open,
						e = t.setOpen,
						a = t.onClose;
					return s.a.createElement(
						M,
						{
							open: n,
							handleOpen: function () {
								e(!0);
							},
						},
						s.a.createElement(
							ft,
							null,
							s.a.createElement(
								"div",
								null,
								s.a.createElement(
									"h4",
									{ className: "title" },
									"Join Team Match"
								),
								s.a.createElement(
									"p",
									{ className: "sub-title" },
									"Add your team members"
								),
								s.a.createElement(
									"button",
									{ className: "close", onClick: a },
									"X"
								),
								s.a.createElement(
									gt,
									null,
									s.a.createElement("input", {
										type: "text",
										className: "input",
										placeholder: "Search username",
									}),
									s.a.createElement(y.a, { className: "icon" })
								),
								s.a.createElement(
									"div",
									{ className: "user" },
									s.a.createElement("img", { src: bt.a, alt: "avatar" }),
									s.a.createElement("p", null, "Username"),
									s.a.createElement("p", { className: "remove" }, "Remove")
								)
							),
							s.a.createElement(
								"div",
								null,
								s.a.createElement(xt, { onClick: a }, "Submit")
							)
						)
					);
				},
				Et = function () {
					var t = Object(m.useState)("public"),
						n = Object(z.a)(t, 2),
						e = n[0],
						a = n[1],
						r = Object(m.useState)(!1),
						o = Object(z.a)(r, 2),
						l = o[0],
						i = o[1],
						p = function () {
							i(!0);
						};
					return s.a.createElement(
						G,
						null,
						s.a.createElement("img", {
							src: L.a,
							alt: "homeHero",
							className: "hero",
						}),
						s.a.createElement(
							F,
							null,
							s.a.createElement(
								"div",
								{ className: "match-head" },
								s.a.createElement(
									"p",
									{ className: "title" },
									"League of Legends Matches"
								),
								s.a.createElement("p", { className: "filter" }, "Filter by:"),
								s.a.createElement(
									I,
									null,
									s.a.createElement(
										"button",
										{
											className: "public" === e && "selected",
											onClick: function () {
												return a("public");
											},
										},
										"Public"
									),
									s.a.createElement(
										"button",
										{
											className: "private" === e && "selected",
											onClick: function () {
												return a("private");
											},
										},
										"Private"
									)
								)
							),
							s.a.createElement(
								"div",
								{ className: "match-list" },
								s.a.createElement(U, { handleOpen: p }),
								s.a.createElement(U, { handleOpen: p }),
								s.a.createElement(U, { handleOpen: p }),
								s.a.createElement(U, { handleOpen: p }),
								s.a.createElement(U, { handleOpen: p }),
								s.a.createElement(U, { handleOpen: p })
							)
						),
						s.a.createElement(vt, {
							open: l,
							onClose: function () {
								i(!1);
							},
						})
					);
				},
				wt = e(78),
				yt = e.n(wt),
				kt = function () {
					var t = Object(m.useState)("public"),
						n = Object(z.a)(t, 2),
						e = n[0],
						a = n[1],
						r = Object(m.useState)(!1),
						o = Object(z.a)(r, 2),
						l = o[0],
						i = o[1],
						p = function () {
							i(!0);
						};
					return s.a.createElement(
						G,
						null,
						s.a.createElement("img", {
							src: yt.a,
							alt: "homeHero",
							className: "hero",
						}),
						s.a.createElement(
							F,
							null,
							s.a.createElement(
								"div",
								{ className: "match-head" },
								s.a.createElement(
									"p",
									{ className: "title" },
									"Team Fight Tactics Matches"
								),
								s.a.createElement("p", { className: "filter" }, "Filter by:"),
								s.a.createElement(
									I,
									null,
									s.a.createElement(
										"button",
										{
											className: "public" === e && "selected",
											onClick: function () {
												return a("public");
											},
										},
										"Public"
									),
									s.a.createElement(
										"button",
										{
											className: "private" === e && "selected",
											onClick: function () {
												return a("private");
											},
										},
										"Private"
									)
								)
							),
							s.a.createElement(
								"div",
								{ className: "match-list" },
								s.a.createElement(U, { handleOpen: p }),
								s.a.createElement(U, { handleOpen: p }),
								s.a.createElement(U, { handleOpen: p }),
								s.a.createElement(U, { handleOpen: p }),
								s.a.createElement(U, { handleOpen: p }),
								s.a.createElement(U, { handleOpen: p })
							)
						),
						s.a.createElement(vt, {
							open: l,
							onClose: function () {
								i(!1);
							},
						})
					);
				},
				Nt = e(79),
				jt = e.n(Nt),
				At = function () {
					var t = Object(m.useState)("public"),
						n = Object(z.a)(t, 2),
						e = n[0],
						a = n[1],
						r = Object(m.useState)(!1),
						o = Object(z.a)(r, 2),
						l = o[0],
						i = o[1],
						p = function () {
							i(!0);
						};
					return s.a.createElement(
						G,
						null,
						s.a.createElement("img", {
							src: jt.a,
							alt: "homeHero",
							className: "hero",
						}),
						s.a.createElement(
							F,
							null,
							s.a.createElement(
								"div",
								{ className: "match-head" },
								s.a.createElement(
									"p",
									{ className: "title" },
									"Legends of Runeterra Matches"
								),
								s.a.createElement("p", { className: "filter" }, "Filter by:"),
								s.a.createElement(
									I,
									null,
									s.a.createElement(
										"button",
										{
											className: "public" === e && "selected",
											onClick: function () {
												return a("public");
											},
										},
										"Public"
									),
									s.a.createElement(
										"button",
										{
											className: "private" === e && "selected",
											onClick: function () {
												return a("private");
											},
										},
										"Private"
									)
								)
							),
							s.a.createElement(
								"div",
								{ className: "match-list" },
								s.a.createElement(U, { handleOpen: p }),
								s.a.createElement(U, { handleOpen: p }),
								s.a.createElement(U, { handleOpen: p }),
								s.a.createElement(U, { handleOpen: p }),
								s.a.createElement(U, { handleOpen: p }),
								s.a.createElement(U, { handleOpen: p })
							)
						),
						s.a.createElement(vt, {
							open: l,
							onClose: function () {
								i(!1);
							},
						})
					);
				},
				Ot = e(80),
				Ct = e.n(Ot),
				St = function () {
					var t = Object(m.useState)("public"),
						n = Object(z.a)(t, 2),
						e = n[0],
						a = n[1],
						r = Object(m.useState)(!1),
						o = Object(z.a)(r, 2),
						l = o[0],
						i = o[1],
						p = function () {
							i(!0);
						};
					return s.a.createElement(
						G,
						null,
						s.a.createElement("img", {
							src: Ct.a,
							alt: "homeHero",
							className: "hero",
						}),
						s.a.createElement(
							F,
							null,
							s.a.createElement(
								"div",
								{ className: "match-head" },
								s.a.createElement(
									"p",
									{ className: "title" },
									"Valorant Matches"
								),
								s.a.createElement("p", { className: "filter" }, "Filter by:"),
								s.a.createElement(
									I,
									null,
									s.a.createElement(
										"button",
										{
											className: "public" === e && "selected",
											onClick: function () {
												return a("public");
											},
										},
										"Public"
									),
									s.a.createElement(
										"button",
										{
											className: "private" === e && "selected",
											onClick: function () {
												return a("private");
											},
										},
										"Private"
									)
								)
							),
							s.a.createElement(
								"div",
								{ className: "match-list" },
								s.a.createElement(U, { handleOpen: p }),
								s.a.createElement(U, { handleOpen: p }),
								s.a.createElement(U, { handleOpen: p }),
								s.a.createElement(U, { handleOpen: p }),
								s.a.createElement(U, { handleOpen: p }),
								s.a.createElement(U, { handleOpen: p })
							)
						),
						s.a.createElement(vt, {
							open: l,
							onClose: function () {
								i(!1);
							},
						})
					);
				},
				Pt = N.a.div(
					Y ||
						(Y = Object(k.a)([
							"\n\twidth: 100vw;\n\theight: calc(100vh -100px);\n\tmargin: 0;\n\tpadding-bottom: 100px;\n\t.header {\n\t\ttext-align: left;\n\t\tfont: normal normal bold 28px/42px Poppins;\n\t\tletter-spacing: 0px;\n\t\tcolor: #ef4444;\n\t\tpadding: 25px 140px;\n\t\twidth: 100vw;\n\t\tmargin: 0 !important;\n\t\tdisplay: flex;\n\t\tjustify-content: space-between;\n\t}\n\n\t.hero {\n\t\twidth: 100vw;\n\t\theight: 400px;\n\t\tobject-fit: cover;\n\t}\n\n\t@media screen and (max-width: 600px) {\n\t\t.header {\n\t\t\tpadding: 100px 20px !important;\n\t\t\tflex-direction: column;\n\t\t\tpadding-bottom: 30px !important;\n\t\t}\n\t}\n",
						]))
				),
				zt =
					(N.a.div(
						J ||
							(J = Object(k.a)([
								"\n\twidth: 100%;\n\tmargin-top: 50px;\n\tpadding: 20px 140px;\n\n\t.match-head {\n\t\tdisplay: flex;\n\t}\n\t.title {\n\t\tfont: var(--unnamed-font-style-normal) normal\n\t\t\tvar(--unnamed-font-weight-bold) var(--unnamed-font-size-30) /\n\t\t\tvar(--unnamed-line-spacing-46) var(--unnamed-font-family-poppins);\n\t\tletter-spacing: var(--unnamed-character-spacing-0-01);\n\t\tcolor: var(--unnamed-color-000000);\n\n\t\tfont: normal normal bold 30px/46px Poppins;\n\n\t\tcolor: #000000;\n\t}\n\t.filter {\n\t\tmargin: 13px 20px;\n\t\tfont: normal normal normal 16px/22px Source Sans Pro;\n\t}\n\n\t.match-list {\n\t\tdisplay: grid;\n\t\tgrid-template-columns: 1fr 1fr 1fr;\n\t\tgrid-gap: 17px;\n\t\tmargin-top: 30px;\n\t}\n\t@media screen and (max-width: 600px) {\n\t\t.match-list {\n\t\t\tgrid-template-columns: 1fr;\n\t\t\tmax-width: 90vw;\n\t\t}\n\t}\n",
							]))
					),
					N.a.button(
						T ||
							(T = Object(k.a)([
								"\n\tborder: none;\n\tbackground-color: transparent;\n\ttext-align: left;\n\tfont: ",
								";\n\tletter-spacing: 0px;\n\tcolor: ",
								";\n\topacity: ",
								";\n",
							])),
						function (t) {
							return t.active
								? "normal normal bold 28px/42px Poppins"
								: "normal normal 300 28px/42px Poppins";
						},
						function (t) {
							return t.active ? "#ef4444" : "#D4D4D8";
						},
						function (t) {
							return t.active ? "1" : "0.8";
						}
					)),
				Gt = function (t) {
					var n = t.currentStep,
						e = t.children,
						a = t.setStep;
					return s.a.createElement(
						Pt,
						null,
						s.a.createElement(
							"div",
							{ className: "header" },
							[
								"Valorant ",
								"League of Legends",
								"Team Fight Tactics",
								"Legends of Runeterra",
							].map(function (t, e) {
								var r = e === n;
								return s.a.createElement(
									zt,
									{
										key: e,
										onClick: function () {
											return a(e);
										},
										active: r,
									},
									t
								);
							})
						),
						s.a.createElement(
							"div",
							{ className: "content" },
							s.a.Children.map(e, function (t, e) {
								return e === n ? s.a.createElement("div", { key: e }, t) : null;
							})
						)
					);
				},
				Ft = N.a.div(
					W ||
						(W = Object(k.a)([
							"\n\twidth: 100vw;\n\theight: calc(100vh -100px);\n\n\tmargin: 0;\n\t.header {\n\t\ttext-align: left;\n\t\tfont: normal normal bold 28px/42px Poppins;\n\t\tletter-spacing: 0px;\n\t\tcolor: #ef4444;\n\t\tpadding: 25px 140px;\n\t\twidth: 100vw;\n\t\tmargin: 0 !important;\n\t\tdisplay: flex;\n\t\tjustify-content: space-between;\n\t}\n\n\t.hero {\n\t\twidth: 100vw;\n\t\theight: 400px;\n\t\tobject-fit: cover;\n\t}\n",
						]))
				),
				It =
					(N.a.div(
						H ||
							(H = Object(k.a)([
								"\n\twidth: 100%;\n\tmargin-top: 50px;\n\tpadding: 20px 140px;\n\n\t.match-head {\n\t\tdisplay: flex;\n\t}\n\t.title {\n\t\tfont: normal normal bold 30px/46px Poppins;\n\t\tcolor: #000000;\n\t}\n\t.filter {\n\t\tmargin: 13px 20px;\n\n\t\tfont: normal normal normal 16px/22px Source Sans Pro;\n\t}\n\n\t.match-list {\n\t\tdisplay: grid;\n\t\tgrid-template-columns: 1fr 1fr 1fr;\n\t\tgrid-gap: 17px;\n\t\tmargin-top: 30px;\n\t}\n\t@media screen and (max-width: 600px) {\n\t\t.match-list {\n\t\t\tgrid-template-columns: 1fr;\n\t\t\tmax-width: 90vw;\n\t\t}\n\t}\n",
							]))
					),
					N.a.div(
						X ||
							(X = Object(k.a)([
								"\n\twidth: 200px;\n\tfont-display: grid;\n\tgrid-template-columns: 1fr 1fr;\n\n\theight: 50px;\n\t/* UI Properties */\n\tbackground: var(--unnamed-color-f0f0f0) 0% 0% no-repeat padding-box;\n\tbackground: #f0f0f0 0% 0% no-repeat padding-box;\n\tborder-radius: 10px;\n\tpadding: 10px;\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tbutton {\n\t\tborder: none;\n\t\tcolor: black;\n\t\twidth: 78px;\n\t\theight: 100%;\n\t\t/* UI Properties */\n\t\tbackground-color: transparent;\n\t\tfont: var(--unnamed-font-style-normal) normal\n\t\t\tvar(--unnamed-font-weight-bold) var(--unnamed-font-size-17) / 24px\n\t\t\tvar(--unnamed-font-family-source-sans-pro);\n\t\tletter-spacing: var(--unnamed-character-spacing-0-02);\n\t\tcolor: var(--unnamed-color-ffffff);\n\t\ttext-align: center;\n\t\tfont: normal normal bold 17px/24px Source Sans Pro;\n\t\tletter-spacing: 0.02px;\n\t\tborder-radius: 10px;\n\t}\n\t.selected {\n\t\tbackground: var(--unnamed-color-2865b3) 0% 0% no-repeat padding-box;\n\t\tbackground: #2865b3 0% 0% no-repeat padding-box;\n\t\tcolor: #fff;\n\t}\n",
							]))
					),
					function () {
						var t = Object(m.useState)(0),
							n = Object(z.a)(t, 2),
							e = n[0],
							a = n[1];
						return s.a.createElement(
							Ft,
							null,
							s.a.createElement(
								Gt,
								{ currentStep: e, setStep: a },
								s.a.createElement(St, null),
								s.a.createElement(Et, null),
								s.a.createElement(kt, null),
								s.a.createElement(At, null)
							)
						);
					}),
				Dt = N.a.div(
					Z ||
						(Z = Object(k.a)([
							"\n\tmax-width: 100%;\n\twidth: 100%;\n\theight: fit-content;\n\tdisplay: grid;\n\tgrid-template-columns: 321px 1fr;\n\t/* grid-gap: 74px; */\n\tmargin: 0px auto;\n\tmargin-right: 50px;\n\tpadding: 0 !important;\n\t.header {\n\t\theight: 100%;\n\t\tposition: fixed;\n\t\ttop: 75px;\n\t\tpadding-top: 80px;\n\t\tborder: none;\n\t\tmargin-top: -19px;\n\t\tborder-right: 1px solid #d4d4d8;\n\t\tpadding-right: 50px;\n\n\t\th1 {\n\t\t\ttext-align: left;\n\t\t\tfont: normal normal bold 24px/51px Poppins;\n\t\t\tcolor: #3f3f46;\n\t\t}\n\t}\n\n\t.nav {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\twidth: 100%;\n\t\ttext-align: left;\n\t\tmargin-top: 50px;\n\t}\n\t@media screen and (max-width: 600px) {\n\t\t.nav {\n\t\t\tmargin-top: 10px;\n\t\t}\n\t}\n\t.tab {\n\t\ttext-align: left;\n\t\tfont: normal normal normal 21px/32px Poppins;\n\t\tletter-spacing: 0px;\n\t\tcolor: #0a0a0a;\n\t\tbackground-color: transparent;\n\t\tborder: none;\n\t\tmargin-bottom: 33px;\n\t}\n\t.active {\n\t\ttext-align: left;\n\t\tfont: normal normal bold 21px/31px Poppins;\n\t\tletter-spacing: 0px;\n\t\tcolor: #4e80ee;\n\t}\n\t.content {\n\t\tpadding-top: 80px;\n\t}\n\n\t.content h1 {\n\t\tmargin-bottom: 24px;\n\t\ttext-align: left;\n\t\tfont: normal normal normal 30px/46px Poppins;\n\t\tletter-spacing: 0.01px;\n\t\tcolor: #000000;\n\t}\n\t.content .profile-container {\n\t\tmargin-bottom: 34px;\n\t}\n\t.edit__link {\n\t\ttext-align: left;\n\t\tfont: normal normal bold 16px/24px Poppins;\n\t\tletter-spacing: 0px;\n\t\tcolor: #4e80ee;\n\t\twidth: 100%;\n\t}\n\t.content .general-icon {\n\t\ttext-align: center;\n\t\tdisplay: block;\n\t\twidth: 100px;\n\t}\n\t.content {\n\t\tdisplay: flex;\n\t}\n\t.nestd-container {\n\t\tdisplay: flex;\n\n\t\tflex-flow: column;\n\t\twidth: 100%;\n\t}\n\t.row-user {\n\t\tdisplay: flex;\n\t\tmargin-top: 25px;\n\t}\n\t.content .nestd-container .row-user .field-name {\n\t\tflex: 1;\n\t\tmin-width: 120px;\n\t\tmargin-right: 20px;\n\n\t\ttext-align: left;\n\t\tfont: normal normal normal 16px/25px Poppins;\n\t\tletter-spacing: 0px;\n\t\tcolor: #0a0a0a;\n\t\topacity: 1;\n\t}\n\t.content .nestd-container .row-user .field-value {\n\t\tflex: 1;\n\t\ttext-align: left;\n\t\tfont: normal normal normal 16px/25px Poppins;\n\t\tletter-spacing: 0px;\n\t\tcolor: #0a0a0a;\n\t\topacity: 1;\n\t}\n\t.content .nestd-container .row-user .edit-link {\n\t\tflex: 1;\n\t\ttext-align: left;\n\t\tfont: normal normal bold 16px/24px Poppins;\n\t\tletter-spacing: 0px;\n\t\tcolor: #4e80ee;\n\t\topacity: 1;\n\t}\n\n\t.content .match-history-content {\n\t\tmargin-top: 72px;\n\t}\n\t.content .match-history-content .row {\n\t\tdisplay: flex;\n\t\tmargin-bottom: 20px;\n\t}\n\t.content .match-history-content .row span {\n\t\tflex: 1;\n\t\tfont: var(--unnamed-font-style-normal) normal\n\t\t\tvar(--unnamed-font-weight-normal) var(--unnamed-font-size-17) /\n\t\t\tvar(--unnamed-line-spacing-26) var(--unnamed-font-family-poppins);\n\t\tletter-spacing: var(--unnamed-character-spacing-0);\n\t\tcolor: var(--unnamed-color-000000);\n\t\ttext-align: left;\n\t\tfont: normal normal normal 17px/26px Poppins;\n\t\tletter-spacing: 0px;\n\t\tcolor: #000000;\n\t\topacity: 1;\n\t}\n\t.upcoming-matches .match-list {\n\t\tdisplay: grid;\n\t\tgrid-template-columns: 1fr 1fr 1fr;\n\t\tgrid-gap: 17px;\n\t\tmargin-top: 30px;\n\t}\n\tbutton.red {\n\t\twidth: 104px;\n\t\theight: 31px;\n\t\tborder: none;\n\t\tbackground: var(--unnamed-color-ef4444) 0% 0% no-repeat padding-box;\n\t\tbackground: #ef4444 0% 0% no-repeat padding-box;\n\t\tborder-radius: 8px;\n\n\t\ttext-align: center;\n\t\ttext-decoration: none;\n\t\tfloat: right;\n\n\t\tfont: normal normal bold 14px/21px Poppins;\n\t\tletter-spacing: 0.02px;\n\t\tcolor: #ffffff;\n\t}\n\tbutton.cash {\n\t\tmargin-top: 35px;\n\t\twidth: 140px;\n\t\theight: 40px;\n\t\tborder: none;\n\t\tbackground: var(---d44244) 0% 0% no-repeat padding-box;\n\t\tbackground: #d44244 0% 0% no-repeat padding-box;\n\t\tborder-radius: 15px;\n\t\topacity: 1;\n\t\tfont: normal normal bold 17px/24px Source Sans Pro;\n\t\tletter-spacing: 0.02px;\n\t\tcolor: #ffffff;\n\t\tbackground: #3b82f6 0% 0% no-repeat padding-box;\n\t\tborder-radius: 8px;\n\t\tbackground: #3b82f6 0% 0% no-repeat padding-box;\n\t\tborder-radius: 8px;\n\t\topacity: 1;\n\t}\n\tdiv.cash-text {\n\t\ttext-align: left;\n\t\tfont: normal normal normal 16px/22px Source Sans Pro;\n\t\tletter-spacing: 0.01px;\n\t\tcolor: #000000;\n\t\topacity: 1;\n\t}\n\t@media screen and (max-width: 600px) {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tmargin: 0px auto;\n\t\tmargin-right: 50px;\n\t\tpadding: 0 !important;\n\n\t\t.header {\n\t\t\tborder-right: none;\n\t\t\tposition: relative;\n\t\t\tborder-bottom: 1px solid #707070;\n\t\t\tpadding: 0;\n\t\t\ttext-align: center !important;\n\t\t\tmargin-top: 0px;\n\t\t}\n\t}\n\t@media screen and (max-width: 600px) {\n\t\t.content .match-history-content .table-header {\n\t\t\tdisplay: none;\n\t\t}\n\t\t.content .row-user {\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t}\n\n\t\t.content {\n\t\t\tpadding-top: 100px;\n\t\t}\n\t}\n",
						]))
				),
				Rt = function (t) {
					var n = t.currentStep,
						e = t.children,
						a = t.setStep;
					return s.a.createElement(
						Dt,
						null,
						s.a.createElement(
							"div",
							{ className: "header" },
							s.a.createElement("h1", null, "Account Settings"),
							s.a.createElement(
								"div",
								{ className: "nav" },
								[
									"General ",
									"Match history",
									"Payment information",
									"Gaming accounts",
									"How to cash out",
								].map(function (t, e) {
									var r = e === n;
									return s.a.createElement(
										"button",
										{
											key: e,
											onClick: function () {
												return a(e);
											},
											className: " tab ".concat(r && "active ", " "),
										},
										t
									);
								})
							)
						),
						s.a.createElement("div", null),
						s.a.createElement(
							"div",
							{ className: "content" },
							s.a.Children.map(e, function (t, e) {
								return e === n
									? s.a.createElement(
											"div",
											{ className: "nestd-container", key: e },
											t
									  )
									: null;
							})
						)
					);
				},
				Bt = N.a.div(
					_ ||
						(_ = Object(k.a)([
							"\n\twidth: 100vw;\n\theight: calc(100vh -100px);\n\tpadding: 0px 140px;\n\tmargin: 0;\n\t.header {\n\t\ttext-align: left;\n\t\tfont: normal normal normal 40px/60px Poppins;\n\t\tletter-spacing: 0px;\n\t\tcolor: #a2a2a2;\n\t}\n\t.red {\n\t\ttext-align: left;\n\t\ttext-decoration: underline;\n\t\tfont: normal normal bold 40px/60px Poppins;\n\t\tletter-spacing: 0px;\n\t\tcolor: #d44244;\n\t\tmargin-right: 20px;\n\t}\n\n\t.hero {\n\t\theight: 450px;\n\t\tobject-fit: cover;\n\t\twidth: 100%;\n\t}\n\t@media screen and (max-width: 600px) {\n\t\tpadding: 30px;\n\t}\n",
						]))
				),
				Ut =
					(N.a.div(
						$ ||
							($ = Object(k.a)([
								"\n\twidth: 100%;\n\tmargin-top: 50px;\n\t.match-head {\n\t\tdisplay: flex;\n\t}\n\t.title {\n\t\tfont: var(--unnamed-font-style-normal) normal\n\t\t\tvar(--unnamed-font-weight-bold) var(--unnamed-font-size-30) /\n\t\t\tvar(--unnamed-line-spacing-46) var(--unnamed-font-family-poppins);\n\t\tletter-spacing: var(--unnamed-character-spacing-0-01);\n\t\tcolor: var(--unnamed-color-000000);\n\n\t\tfont: normal normal bold 30px/46px Poppins;\n\n\t\tcolor: #000000;\n\t}\n\t.filter {\n\t\tmargin: 13px 20px;\n\t\tfont: var(--unnamed-font-style-normal) normal\n\t\t\tvar(--unnamed-font-weight-normal) var(--unnamed-font-size-16) /\n\t\t\tvar(--unnamed-line-spacing-22) var(--unnamed-font-family-source-sans-pro);\n\t\tletter-spacing: var(--unnamed-character-spacing-0-01);\n\t\tcolor: var(--unnamed-color-000000);\n\t\tfont: normal normal normal 16px/22px Source Sans Pro;\n\t}\n\n\t.match-list {\n\t\tdisplay: grid;\n\t\tgrid-template-columns: 1fr 1fr 1fr;\n\t\tgrid-gap: 17px;\n\t\tmargin-top: 30px;\n\t}\n",
							]))
					),
					N.a.div(
						tt ||
							(tt = Object(k.a)([
								"\n\twidth: 200px;\n\tfont-display: grid;\n\tgrid-template-columns: 1fr 1fr;\n\n\theight: 50px;\n\t/* UI Properties */\n\tbackground: var(--unnamed-color-f0f0f0) 0% 0% no-repeat padding-box;\n\tbackground: #f0f0f0 0% 0% no-repeat padding-box;\n\tborder-radius: 10px;\n\tpadding: 10px;\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tbutton {\n\t\tborder: none;\n\t\tcolor: black;\n\t\twidth: 78px;\n\t\theight: 100%;\n\t\t/* UI Properties */\n\t\tbackground-color: transparent;\n\t\tfont: var(--unnamed-font-style-normal) normal\n\t\t\tvar(--unnamed-font-weight-bold) var(--unnamed-font-size-17) / 24px\n\t\t\tvar(--unnamed-font-family-source-sans-pro);\n\t\tletter-spacing: var(--unnamed-character-spacing-0-02);\n\t\tcolor: var(--unnamed-color-ffffff);\n\t\ttext-align: center;\n\t\tfont: normal normal bold 17px/24px Source Sans Pro;\n\t\tletter-spacing: 0.02px;\n\t\tborder-radius: 10px;\n\t}\n\t.selected {\n\t\tbackground: var(--unnamed-color-2865b3) 0% 0% no-repeat padding-box;\n\t\tbackground: #2865b3 0% 0% no-repeat padding-box;\n\t\tcolor: #fff;\n\t}\n",
							]))
					),
					e(81)),
				Vt = e.n(Ut),
				Lt = function () {
					return s.a.createElement(
						s.a.Fragment,
						null,
						s.a.createElement("h1", null, "General"),
						s.a.createElement(
							"div",
							{ className: "profile-container" },
							s.a.createElement(
								"div",
								{ className: "general-icon" },
								s.a.createElement("img", {
									src: Vt.a,
									alt: "",
									className: "profile",
								})
							)
						),
						s.a.createElement(g.b, { className: "edit__link " }, "Edit"),
						s.a.createElement(
							"div",
							{ className: "row-user" },
							s.a.createElement(
								"span",
								{ className: "field-name" },
								"Username"
							),
							s.a.createElement(
								"span",
								{ className: "field-value" },
								"Sniperkid123"
							),
							s.a.createElement("span", { className: "edit-link" }, "Edit")
						),
						s.a.createElement(
							"div",
							{ className: "row-user" },
							s.a.createElement("span", { className: "field-name" }, "Email"),
							s.a.createElement(
								"span",
								{ className: "field-value" },
								"Sniperkid123@email.com"
							),
							s.a.createElement("span", { className: "edit-link" }, "Edit")
						),
						s.a.createElement(
							"div",
							{ className: "row-user" },
							s.a.createElement(
								"span",
								{ className: "field-name" },
								"Password"
							),
							s.a.createElement(
								"span",
								{ className: "field-value" },
								"*************"
							),
							s.a.createElement("span", { className: "edit-link" }, "Edit")
						),
						s.a.createElement(
							"div",
							{ className: "row-user" },
							s.a.createElement("span", { className: "field-name" }, "DOB"),
							s.a.createElement(
								"span",
								{ className: "field-value" },
								"January 12 2002"
							),
							s.a.createElement("span", { className: "edit-link" }, "Edit")
						)
					);
				},
				Kt = N.a.table(
					nt ||
						(nt = Object(k.a)([
							"\n\tborder-collapse: collapse;\n\tmargin: 0;\n\tmargin-bottom: 100px;\n\tpadding: 0;\n\twidth: 100%;\n\ttable-layout: fixed;\n\t@media screen and (max-width: 600px) {\n\t\tmargin-bottom: 10px;\n\t}\n\tcaption {\n\t\tfont-size: 1.5em;\n\t\tmargin: 0.5em 0 0.75em;\n\t\tcaption-side: top;\n\t\ttext-align: left;\n\t\tfont: normal normal normal 23px/51px Poppins;\n\t\tletter-spacing: 0.01px;\n\t\tcolor: #3f3f46;\n\t\topacity: 1;\n\t}\n\n\ttr {\n\t\tborder-bottom: 1px solid #9d9d9d3b;\n\t\tpadding: 0.35em;\n\t}\n\ttbody tr:last-child {\n\t\tborder-bottom: 0;\n\t}\n\tth,\n\ttd {\n\t\tpadding: 0.625em;\n\t\tvertical-align: top;\n\t\ttext-align: left;\n\t\tfont: normal normal normal 16px/25px Poppins;\n\t\tletter-spacing: 0px;\n\t\tcolor: #0a0a0a;\n\t}\n\n\tth {\n\t\t/* font-size: 0.85em;\n    letter-spacing: 0.1em;\n    text-transform: uppercase; */\n\t\ttext-align: left;\n\t\tfont: normal normal bold 16px/25px Poppins;\n\t\tletter-spacing: 0px;\n\t\tcolor: #0a0a0a;\n\t\topacity: 1;\n\t}\n\n\t@media screen and (max-width: 978px) {\n\t\tborder: 0;\n\n\t\tcaption {\n\t\t\tfont-size: 1.3em;\n\t\t}\n\n\t\tthead {\n\t\t\tborder: none;\n\t\t\tclip: rect(0 0 0 0);\n\t\t\theight: 1px;\n\t\t\tmargin: -1px;\n\t\t\toverflow: hidden;\n\t\t\tpadding: 0;\n\t\t\tposition: absolute;\n\t\t\twidth: 1px;\n\t\t}\n\n\t\ttr {\n\t\t\tborder-bottom: 3px solid #ddd;\n\t\t\tdisplay: block;\n\t\t\tmargin-bottom: 0.625em;\n\t\t}\n\n\t\ttd {\n\t\t\tborder-bottom: 1px solid #ddd;\n\t\t\tdisplay: block;\n\t\t\tfont-size: 0.8em;\n\t\t\ttext-align: right;\n\t\t}\n\n\t\ttd::before {\n\t\t\t/*\n    * aria-label has no advantage, it won't be read inside a table\n    content: attr(aria-label);\n    */\n\t\t\tcontent: attr(data-label);\n\t\t\tfloat: left;\n\t\t\tfont-weight: bold;\n\t\t\ttext-transform: uppercase;\n\t\t}\n\n\t\ttd:last-child {\n\t\t\tborder-bottom: 0;\n\t\t}\n\t}\n",
						]))
				),
				qt = function () {
					return s.a.createElement(
						s.a.Fragment,
						null,
						s.a.createElement(
							Kt,
							null,
							s.a.createElement("caption", null, "Match History"),
							s.a.createElement(
								"thead",
								null,
								s.a.createElement(
									"tr",
									null,
									s.a.createElement("th", { scope: "col" }, "Date"),
									s.a.createElement("th", { scope: "col" }, "Name"),
									s.a.createElement("th", { scope: "col" }, "Game"),
									s.a.createElement("th", { scope: "col" }, "Payout")
								)
							),
							s.a.createElement(
								"tbody",
								null,
								s.a.createElement(
									"tr",
									null,
									s.a.createElement(
										"td",
										{ "data-label": "Date" },
										"08/21/2020"
									),
									s.a.createElement(
										"td",
										{ "data-label": "Name" },
										"Some Generic Long Title Some Generic Long Title Some."
									),
									s.a.createElement(
										"td",
										{ "data-label": "Game" },
										"League of Legends"
									),
									s.a.createElement("td", { "data-label": "Payout" }, "23 pogs")
								),
								s.a.createElement(
									"tr",
									null,
									s.a.createElement(
										"td",
										{ "data-label": "Date" },
										"07/21/2020"
									),
									s.a.createElement(
										"td",
										{ "data-label": "Name" },
										"A Short Title"
									),
									s.a.createElement(
										"td",
										{ "data-label": "Game" },
										"Team Fights Tactics"
									),
									s.a.createElement(
										"td",
										{ "data-label": "Payout" },
										"1203 pogs"
									)
								)
							)
						),
						s.a.createElement(
							Kt,
							null,
							s.a.createElement("caption", null, "Upcoming Matches"),
							s.a.createElement(
								"thead",
								null,
								s.a.createElement(
									"tr",
									null,
									s.a.createElement("th", { scope: "col" }, "Date"),
									s.a.createElement("th", { scope: "col" }, "Name"),
									s.a.createElement("th", { scope: "col" }, "Game")
								)
							),
							s.a.createElement(
								"tbody",
								null,
								s.a.createElement(
									"tr",
									null,
									s.a.createElement(
										"td",
										{ "data-label": "Date" },
										"08/21/2020"
									),
									s.a.createElement(
										"td",
										{ "data-label": "Name" },
										"Some Generic Long Title Some Generic Long Title Some."
									),
									s.a.createElement(
										"td",
										{ "data-label": "Game" },
										"League of Legends"
									)
								),
								s.a.createElement(
									"tr",
									null,
									s.a.createElement(
										"td",
										{ "data-label": "Date" },
										"07/21/2020"
									),
									s.a.createElement(
										"td",
										{ "data-label": "Name" },
										"A Short Title"
									),
									s.a.createElement(
										"td",
										{ "data-label": "Game" },
										"Team Fights Tactics"
									)
								)
							)
						)
					);
				},
				Qt = function () {
					return s.a.createElement(
						s.a.Fragment,
						null,
						s.a.createElement("h1", null, "Payment Information"),
						s.a.createElement(
							"div",
							{ className: "row-user" },
							s.a.createElement("span", { className: "field-name" }, "Paypal"),
							s.a.createElement(
								"span",
								{ className: "field-value" },
								"*************"
							),
							s.a.createElement("span", { className: "edit-link" }, "Edit")
						),
						s.a.createElement(
							"div",
							{ className: "row-user" },
							s.a.createElement("span", { className: "field-name" }, "Venmo"),
							s.a.createElement(
								"span",
								{ className: "field-value" },
								"*************"
							),
							s.a.createElement("span", { className: "edit-link" }, "Edit")
						)
					);
				},
				Mt = function () {
					return s.a.createElement(
						s.a.Fragment,
						null,
						s.a.createElement("h1", null, "Gaming account"),
						s.a.createElement(
							"div",
							{ className: "row-user" },
							s.a.createElement(
								"span",
								{ className: "field-name" },
								"Riot Games"
							),
							s.a.createElement(
								"span",
								{ className: "field-value" },
								"*************"
							),
							s.a.createElement("span", { className: "edit-link" }, "Edit")
						),
						s.a.createElement(
							"div",
							{ className: "row-user" },
							s.a.createElement(
								"span",
								{ className: "field-name" },
								"Epic Games"
							),
							s.a.createElement(
								"span",
								{ className: "field-value" },
								"*************"
							),
							s.a.createElement("span", { className: "edit-link" }, "Edit")
						)
					);
				},
				Yt = N.a.div(
					et ||
						(et = Object(k.a)([
							'\n\twidth: 368px;\n\n\theight: 100%;\n\ttext-align: center;\n\t.close {\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tright: -20px;\n\t\tcolor: #fff;\n\t}\n\t@media screen and(max-width:600px) {\n\t\t.close {\n\t\t\tright: 20px;\n\t\t\tcolor: black;\n\t\t\tz-index: 999999999999;\n\t\t}\n\t}\n\t.title {\n\t\ttext-align: center;\n\t\tfont: normal normal normal 23px/34px Poppins;\n\t\tletter-spacing: 0px;\n\t\tcolor: #000000;\n\t}\n\t.sub-title {\n\t\ttext-align: center;\n\t\tfont: normal normal normal 16px/22px Source Sans Pro;\n\t\tletter-spacing: 0.01px;\n\t\tcolor: #000000;\n\t}\n\n\t.select:after {\n\t\tcolor: red !important;\n\t}\n\t.input-title {\n\t\tmargin-bottom: 2px;\n\t}\n\n\t.sub-title {\n\t\tfont-size: 16px;\n\t}\n\t@media screen and (max-width: 600px) {\n\t\tmax-width: 90vw;\n\t}\n\t.info {\n\t\tposition: relative;\n\t}\n\t.colu {\n\t\tmin-height: 60vh;\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tjustify-content: space-between;\n\t}\n\t.menu {\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tpadding: 8px !important;\n\t\tright: 50px;\n\n\t\twidth: 200px;\n\t\theight: fit-content;\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tjustify-content: space-around;\n\t\tbackground: #27272a 0% 0% no-repeat padding-box;\n\t\tborder-radius: 4px;\n\t\tcolor: #fff;\n\t\t&:before {\n\t\t\tcontent: "";\n\t\t\twidth: 15px;\n\t\t\theight: 15px;\n\t\t\tbackground: #27272a 0% 0% no-repeat padding-box;\n\t\t\tz-index: -99999;\n\t\t\tposition: absolute;\n\t\t\ttop: 8px;\n\t\t\tleft: -2px;\n\t\t\ttransform: rotate(45deg);\n\t\t}\n\t}\n\tp {\n\t\tfont-size: 14px;\n\t}\n\t.short-field-container {\n\t\tdisplay: flex;\n\t\tjustify-content: space-between;\n\t\talign-items: center;\n\t}\n\t.short-field-container input {\n\t\tbackground-color: #ffffff;\n\t\tborder: 1px solid #707070;\n\t}\n\t.short-field-container span {\n\t\tmargin: auto 10px;\n\t}\n\t.wallet {\n\t\ttext-align: left;\n\t\tmargin: 30px auto;\n\t}\n',
						]))
				),
				Jt = N.a.div(
					at ||
						(at = Object(k.a)([
							"\n\twidth: 100%;\n\theight: fit-content;\n\tmargin-top: 15px;\n\ttext-align: left;\n\tcolor: ",
							";\n\t.input {\n\t\twidth: 100%;\n\t\theight: 32px;\n\t\tbackground: var(--unnamed-color-f4f4f5) 0% 0% no-repeat padding-box;\n\t\tbackground: #f4f4f5 0% 0% no-repeat padding-box;\n\t\tborder-radius: 5px;\n\t\tborder: ",
							";\n\n\t\tpadding: 5px;\n\t\t&:focus {\n\t\t\toutline: none;\n\t\t}\n\t}\n\t.warning {\n\t\tdisplay: ",
							";\n\t}\n",
						])),
					function (t) {
						return "invalid" === t.error
							? " #DC2626!important"
							: "valid" === t.error
							? " #4F8CE3"
							: "none";
					},
					function (t) {
						return "invalid" === t.error
							? "1px solid #DC2626!important"
							: "valid" === t.error
							? "1px solid #4F8CE3"
							: "none";
					},
					function (t) {
						return "invalid" === t.error ? "block" : "none";
					}
				),
				Tt = N.a.div(
					rt ||
						(rt = Object(k.a)([
							"\n\twidth: 320px;\n\theight: 31px;\n\tbackground: var(--unnamed-color-2865b3) 0% 0% no-repeat padding-box;\n\tbackground: #2865b3 0% 0% no-repeat padding-box;\n\tborder-radius: 8px;\n\tborder: none;\n\tcolor: #fff;\n\tpadding-top: 4px;\n\tmargin: 0 auto;\n\tmargin-top: 28px;\n\tcursor: pointer;\n\tfont: normal normal bold 14px/21px Poppins;\n\tletter-spacing: 0.02px;\n\tcolor: #ffffff;\n",
						]))
				),
				Wt = e(30),
				Ht = function (t) {
					var n = t.open,
						e = t.setOpen,
						a = t.onClose;
					return s.a.createElement(
						M,
						{
							open: n,
							handleOpen: function () {
								e(!0);
							},
						},
						s.a.createElement(
							Yt,
							null,
							s.a.createElement(
								"div",
								{ className: "colu" },
								s.a.createElement(
									"div",
									null,
									s.a.createElement("h4", { className: "title" }, "Cash out"),
									s.a.createElement(
										"p",
										{ className: "sub-title", style: { textAlign: "left" } },
										"Wallet: 5000 pogs"
									),
									s.a.createElement(
										"button",
										{ className: "close", onClick: a },
										"X"
									),
									s.a.createElement(
										Jt,
										null,
										s.a.createElement(
											"p",
											{ className: "input-title" },
											"Enter amount*"
										),
										" ",
										s.a.createElement(
											"div",
											{ className: "short-field-container" },
											s.a.createElement("input", {
												type: "text",
												className: "input",
											}),
											" ",
											s.a.createElement(
												"span",
												null,
												s.a.createElement(Wt.c, null)
											),
											s.a.createElement("input", {
												type: "text",
												className: "input",
												disabled: !0,
											}),
											" "
										),
										" "
									),
									" ",
									s.a.createElement(
										Jt,
										null,
										s.a.createElement(
											"p",
											{ className: "input-title" },
											"Send to account*"
										),
										" ",
										s.a.createElement(
											"select",
											{ className: "input" },
											s.a.createElement("option", null, "Select"),
											" "
										),
										" "
									)
								),
								s.a.createElement(
									"div",
									null,
									s.a.createElement(Tt, { onClick: a }, "Submit")
								)
							)
						)
					);
				},
				Xt = function () {
					var t = Object(m.useState)(!1),
						n = Object(z.a)(t, 2),
						e = n[0],
						a = n[1],
						r = function () {
							a(!0);
						};
					return s.a.createElement(
						s.a.Fragment,
						null,
						s.a.createElement("h1", null, "How to Cash Out"),
						s.a.createElement(
							"div",
							{ className: "cash-text" },
							"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
						),
						s.a.createElement(Ht, {
							open: e,
							setOpen: r,
							onClose: function () {
								a(!1);
							},
						}),
						s.a.createElement(
							"button",
							{ className: "cash", onClick: r },
							"Cash out"
						)
					);
				},
				Zt = function () {
					var t = Object(m.useState)(0),
						n = Object(z.a)(t, 2),
						e = n[0],
						a = n[1];
					return s.a.createElement(
						Bt,
						null,
						s.a.createElement(
							Rt,
							{
								currentStep: e,
								setStep: function (t) {
									a(t);
								},
							},
							s.a.createElement(Lt, null),
							s.a.createElement(qt, null),
							s.a.createElement(Qt, null),
							s.a.createElement(Mt, null),
							s.a.createElement(Xt, null)
						)
					);
				},
				_t = e(26),
				$t = e(48),
				tn = N.a.div(
					ot ||
						(ot = Object(k.a)([
							"\n\twidth: 100%;\n\theight: 60vh;\n\ttext-align: center;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-between;\n\twidth: 368px;\n\n\ttext-align: center;\n\n\t.close {\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tright: -20px;\n\t\tcolor: #fff;\n\t}\n\n\t@media screen and(max-width:600px) {\n\t\t.close {\n\t\t\tright: 20px;\n\t\t\tcolor: black;\n\t\t\tz-index: 999999999999;\n\t\t}\n\t}\n\t.title {\n\t\tfont: var(--unnamed-font-style-normal) normal\n\t\t\tvar(--unnamed-font-weight-normal) var(--unnamed-font-size-23) /\n\t\t\tvar(--unnamed-line-spacing-34) var(--unnamed-font-family-poppins);\n\t\tletter-spacing: var(--unnamed-character-spacing-0);\n\t\tcolor: var(--unnamed-color-000000);\n\t\ttext-align: center;\n\t\tfont: normal normal normal 23px/34px Poppins;\n\t\tletter-spacing: 0px;\n\t\tcolor: #000000;\n\t}\n\t.sub-title {\n\t\tfont: var(--unnamed-font-style-normal) normal\n\t\t\tvar(--unnamed-font-weight-normal) var(--unnamed-font-size-16) /\n\t\t\tvar(--unnamed-line-spacing-22) var(--unnamed-font-family-source-sans-pro);\n\t\tletter-spacing: var(--unnamed-character-spacing-0-01);\n\t\tcolor: var(--unnamed-color-000000);\n\t\ttext-align: center;\n\t\tfont: normal normal normal 16px/22px Source Sans Pro;\n\t\tletter-spacing: 0.01px;\n\t\tcolor: #000000;\n\t}\n\t.input {\n\t\twidth: 320px;\n\t\theight: 32px;\n\t\tborder: none;\n\t\tbackground-color: #f0f0f0;\n\t\tborder-radius: 8px;\n\t\tpadding-left: 10px;\n\t\tpadding-right: 20px;\n\t\tcolor: #0000008d;\n\n\t\t&:focus {\n\t\t\toutline: none;\n\t\t}\n\t}\n\t.user {\n\t\tdisplay: grid;\n\t\tgrid-template-columns: 20px 1fr 1fr;\n\t\tmargin-top: 24px;\n\t\tbackground: #f4f4f5 0% 0% no-repeat padding-box;\n\t\tbox-shadow: 0px 1px 1px #00000029;\n\t\tborder-radius: 8px;\n\t\tpadding: 10px 14px;\n\t\tpadding-bottom: 0;\n\t}\n\t.remove {\n\t\tcursor: pointer;\n\t\ttext-align: right;\n\t}\n\t.select:after {\n\t\tcolor: red !important;\n\t}\n\t.input-title {\n\t\tmargin-bottom: 2px;\n\t}\n\n\t.sub-title {\n\t\tfont-size: 16px;\n\t}\n\t@media screen and (max-width: 600px) {\n\t\tmax-width: 90vw;\n\t}\n\t.info {\n\t\tposition: relative;\n\t}\n\t.menu {\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tpadding: 10px;\n\t\tright: 0px;\n\t\tbackground: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;\n\t\tbackground: #ffffff 0% 0% no-repeat padding-box;\n\t\tbox-shadow: 0px 3px 10px #00000029;\n\t\tborder-radius: 10px;\n\t\twidth: 200px;\n\t\theight: 72px;\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tjustify-content: space-around;\n\t}\n\tp {\n\t\tfont-size: 14px;\n\t}\n\t.information {\n\t\tfont: var(--unnamed-font-style-normal) normal\n\t\t\tvar(--unnamed-font-weight-bold) var(--unnamed-font-size-17) / 24px\n\t\t\tvar(--unnamed-font-family-source-sans-pro);\n\t\tletter-spacing: var(--unnamed-character-spacing-0-02);\n\t\tcolor: var(--unnamed-color-2865b3);\n\t\ttext-align: left;\n\t\ttext-decoration: underline;\n\t\tfont: normal normal bold 17px/24px Source Sans Pro;\n\t\tletter-spacing: 0.02px;\n\t\tcolor: #2865b3;\n\t}\n",
						]))
				),
				nn = N.a.div(
					lt ||
						(lt = Object(k.a)([
							"\n\twidth: 100%;\n\theight: fit-content;\n\tmargin-top: 15px;\n\ttext-align: left;\n\tposition: relative;\n\tcolor: ",
							";\n\t.input {\n\t\twidth: 100%;\n\t\theight: 32px;\n\t\tbackground: var(--unnamed-color-f4f4f5) 0% 0% no-repeat padding-box;\n\t\tbackground: #f4f4f5 0% 0% no-repeat padding-box;\n\t\tborder-radius: 5px;\n\t\tborder: ",
							";\n\n\t\tpadding: 5px;\n\t\t&:focus {\n\t\t\toutline: none;\n\t\t}\n\t}\n\t.warning {\n\t\tdisplay: ",
							";\n\t}\n\t.icon {\n\t\tposition: absolute;\n\t\tright: 10px;\n\t\ttop: 5px;\n\t\tfont-size: 25px;\n\t}\n",
						])),
					function (t) {
						return "invalid" === t.error
							? " #DC2626!important"
							: "valid" === t.error
							? " #4F8CE3"
							: "none";
					},
					function (t) {
						return "invalid" === t.error
							? "1px solid #DC2626!important"
							: "valid" === t.error
							? "1px solid #4F8CE3"
							: "none";
					},
					function (t) {
						return "invalid" === t.error ? "block" : "none";
					}
				),
				en = N.a.div(
					it ||
						(it = Object(k.a)([
							"\n\twidth: 320px;\n\theight: 31px;\n\tbackground: var(--unnamed-color-2865b3) 0% 0% no-repeat padding-box;\n\tbackground: #2865b3 0% 0% no-repeat padding-box;\n\tborder-radius: 8px;\n\tborder: none;\n\tcolor: #fff;\n\tpadding-top: 4px;\n\tmargin: 0 auto;\n\tmargin-top: 28px;\n\tcursor: pointer;\n\tfont: normal normal bold 14px/21px Poppins;\n\tletter-spacing: 0.02px;\n\tbackground: #f2f2f3 0% 0% no-repeat padding-box;\n\tborder-radius: 8px;\n\ttext-align: center;\n\tfont: normal normal bold 14px/21px Poppins;\n\tletter-spacing: 0.02px;\n\tcolor: #a1a1aa;\n\topacity: 1;\n",
						]))
				),
				an = function (t) {
					var n = t.open,
						e = t.setOpen,
						a = t.onClose;
					return s.a.createElement(
						M,
						{
							open: n,
							handleOpen: function () {
								e(!0);
							},
						},
						s.a.createElement(
							tn,
							null,
							s.a.createElement(
								"div",
								null,
								s.a.createElement(
									"h4",
									{ className: "title" },
									"Create Team Match"
								),
								s.a.createElement(
									"p",
									{ className: "sub-title" },
									"Add your team members"
								),
								s.a.createElement(
									"button",
									{ className: "close", onClick: a },
									"X"
								),
								s.a.createElement(
									nn,
									null,
									s.a.createElement("input", {
										type: "text",
										className: "input",
										placeholder: "Search username",
									}),
									s.a.createElement(y.a, { className: "icon" })
								),
								s.a.createElement(
									"div",
									{ className: "user" },
									s.a.createElement("img", { src: bt.a, alt: "avatar" }),
									s.a.createElement("p", null, "Username"),
									s.a.createElement("p", { className: "remove" }, "Remove")
								)
							),
							s.a.createElement(
								"div",
								null,
								s.a.createElement(en, { onClick: a }, "Submit"),
								s.a.createElement(
									"p",
									{ style: { marginTop: "10px" } },
									"Step 2 of 2"
								)
							)
						)
					);
				},
				rn = {
					position: "absolute",
					top: "55%",
					left: "50%",
					transform: "translate(-50%, -50%)",
					width: "425px",
					outline: "none",
					padding: "39px 49px",
					background: "#FFFFFF 0% 0% no-repeat padding-box",
					boxShadow: " 0px 3px 10px #0000001F",
					borderRadius: "15px",
				},
				on = function (t) {
					var n = t.open,
						e = t.setOpen,
						a = t.onClose,
						r = Object(m.useState)(!1),
						o = Object(z.a)(r, 2),
						l = o[0],
						i = o[1],
						p = Object(m.useState)(""),
						c = Object(z.a)(p, 2),
						d = c[0],
						u = c[1],
						f = Object(m.useState)(""),
						g = Object(z.a)(f, 2),
						x = g[0],
						h = g[1],
						b = Object(m.useState)(""),
						v = Object(z.a)(b, 2),
						E = v[0],
						w = v[1],
						y = Object(m.useState)(""),
						k = Object(z.a)(y, 2),
						N = k[0],
						j = k[1],
						A = Object(m.useState)(""),
						O = Object(z.a)(A, 2),
						C = O[0],
						S = O[1],
						P = Object(m.useState)(""),
						G = Object(z.a)(P, 2),
						F = G[0],
						I = G[1],
						D = Object(m.useState)(!1),
						R = Object(z.a)(D, 2),
						B = R[0],
						U = R[1],
						V = Object(m.useState)(!1),
						L = Object(z.a)(V, 2),
						Q = L[0],
						Y = L[1];
					return s.a.createElement(
						"div",
						null,
						s.a.createElement(
							q.a,
							{
								open: n,
								"aria-labelledby": "modal-modal-title",
								"aria-describedby": "modal-modal-description",
							},
							s.a.createElement(
								K.a,
								{ sx: rn },
								s.a.createElement(
									M,
									{
										open: n,
										handleOpen: function () {
											e(!0);
										},
									},
									s.a.createElement(
										Yt,
										null,
										s.a.createElement(
											"h4",
											{ className: "title" },
											"Create Solo Match"
										),
										s.a.createElement(
											"button",
											{ className: "close", onClick: a },
											"X"
										),
										s.a.createElement(
											Jt,
											{ error: l ? (d.length < 1 ? "invalid" : "valid") : "" },
											s.a.createElement(
												"p",
												{ className: "input-title" },
												"Match name "
											),
											s.a.createElement("input", {
												type: "text",
												className: "input",
												onChange: function (t) {
													return u(t.target.value);
												},
											}),
											s.a.createElement(
												"p",
												{ className: "warning" },
												"This field is required"
											)
										),
										s.a.createElement(
											Jt,
											{ error: l ? (x.length < 1 ? "invalid" : "valid") : "" },
											s.a.createElement(
												"p",
												{ className: "input-title" },
												"Game "
											),
											s.a.createElement(
												"select",
												{
													className: "input",
													onChange: function (t) {
														return h(t.target.value);
													},
												},
												s.a.createElement("option", {
													selected: "true",
													value: "",
													disabled: "disabled",
												}),
												s.a.createElement("option", null, "Valorant"),
												s.a.createElement("option", null, "League of Lefends"),
												s.a.createElement("option", null, "Team Fight Tactics"),
												s.a.createElement(
													"option",
													null,
													"Legends of Runeterra"
												)
											),
											s.a.createElement(
												"p",
												{ className: "warning" },
												"This field is required"
											)
										),
										s.a.createElement(
											Jt,
											{ error: l ? (E.length < 1 ? "invalid" : "valid") : "" },
											s.a.createElement(
												"p",
												{ className: "input-title" },
												"Match date "
											),
											s.a.createElement("input", {
												type: "date",
												className: "input",
												onChange: function (t) {
													return w(t.target.value);
												},
											}),
											s.a.createElement(
												"p",
												{ className: "warning" },
												"This field is required"
											)
										),
										s.a.createElement(
											Jt,
											{ error: l ? (N.length < 1 ? "invalid" : "valid") : "" },
											s.a.createElement(
												"p",
												{ className: "input-title info" },
												"Loot amount ",
												s.a.createElement(_t.b, {
													onClick: function () {
														return U(!B);
													},
												}),
												B &&
													s.a.createElement(
														"div",
														{ className: "menu" },
														s.a.createElement(
															"p",
															null,
															"Pool in money per team from P0 to P2000. Winnings split evenly."
														)
													)
											),
											s.a.createElement("input", {
												type: "text",
												className: "input",
												onChange: function (t) {
													return j(t.target.value);
												},
											}),
											s.a.createElement(
												"p",
												{ className: "warning" },
												"This field is required"
											)
										),
										s.a.createElement(
											Jt,
											{ error: l ? (C.length < 1 ? "invalid" : "valid") : "" },
											s.a.createElement(
												"p",
												{ className: "input-title" },
												"Match Details"
											),
											s.a.createElement("textarea", {
												name: "",
												className: "input",
												id: "",
												cols: "30",
												rows: "20",
												style: { minHeight: "60px" },
												onChange: function (t) {
													return S(t.target.value);
												},
											})
										),
										s.a.createElement(
											Jt,
											{ error: l ? (F.length < 1 ? "invalid" : "valid") : "" },
											s.a.createElement(
												"p",
												{ className: "input-title info" },
												"Gamertag ",
												s.a.createElement(_t.b, {
													onClick: function () {
														return Y(!Q);
													},
												}),
												Q &&
													s.a.createElement(
														"div",
														{ className: "menu" },
														s.a.createElement(
															"p",
															null,
															"Your gamertag is displayed in the Match Page for others to add you."
														)
													)
											),
											s.a.createElement("input", {
												type: "text",
												className: "input",
												onChange: function (t) {
													return I(t.target.value);
												},
											}),
											s.a.createElement(
												"p",
												{ className: "warning" },
												"This field is required"
											)
										),
										s.a.createElement(
											Tt,
											{
												onClick: function () {
													d.length < 1 ||
													x.length < 1 ||
													E.length < 1 ||
													N.length < 1 ||
													C.length < 1 ||
													F.length < 1
														? i(!0)
														: (i(!1),
														  w(""),
														  S(""),
														  j(""),
														  u(""),
														  I(""),
														  h(""),
														  a());
												},
											},
											"Submit"
										)
									)
								)
							)
						)
					);
				},
				ln = N.a.div(
					pt ||
						(pt = Object(k.a)([
							'\n\twidth: 368px;\n\n\theight: 100%;\n\ttext-align: center;\n\t.close {\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tright: -20px;\n\t\tcolor: #fff;\n\t}\n\t@media screen and(max-width:600px) {\n\t\t.close {\n\t\t\tright: 20px;\n\t\t\tcolor: black;\n\t\t\tz-index: 999999999999;\n\t\t}\n\t}\n\t.title {\n\t\ttext-align: center;\n\t\tfont: normal normal normal 23px/34px Poppins;\n\t\tletter-spacing: 0px;\n\t\tcolor: #000000;\n\t}\n\t.sub-title {\n\t\ttext-align: center;\n\t\tfont: normal normal normal 16px/22px Source Sans Pro;\n\t\tletter-spacing: 0.01px;\n\t\tcolor: #000000;\n\t}\n\n\t.select:after {\n\t\tcolor: red !important;\n\t}\n\t.input-title {\n\t\tmargin-bottom: 2px;\n\t}\n\n\t.sub-title {\n\t\tfont-size: 16px;\n\t}\n\t@media screen and (max-width: 600px) {\n\t\tmax-width: 90vw;\n\t}\n\t.info {\n\t\tposition: relative;\n\t}\n\t.menu {\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tpadding: 8px !important;\n\t\tright: 50px;\n\n\t\twidth: 200px;\n\t\theight: fit-content;\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tjustify-content: space-around;\n\t\tbackground: #27272a 0% 0% no-repeat padding-box;\n\t\tborder-radius: 4px;\n\t\tcolor: #fff;\n\t\t&:before {\n\t\t\tcontent: "";\n\t\t\twidth: 15px;\n\t\t\theight: 15px;\n\t\t\tbackground: #27272a 0% 0% no-repeat padding-box;\n\t\t\tz-index: -99999;\n\t\t\tposition: absolute;\n\t\t\ttop: 8px;\n\t\t\tleft: -2px;\n\t\t\ttransform: rotate(45deg);\n\t\t}\n\t}\n\tp {\n\t\tfont-size: 14px;\n\t}\n\t.short-field-container {\n\t\tdisplay: flex;\n\t\tjustify-content: space-between;\n\t\talign-items: center;\n\t}\n\t.short-field-container input {\n\t\tbackground-color: #ffffff;\n\t\tborder: 1px solid #707070;\n\t}\n\t.short-field-container span {\n\t\tmargin: auto 10px;\n\t}\n\t.wallet {\n\t\ttext-align: left;\n\t\tmargin: 30px auto;\n\t}\n',
						]))
				),
				pn = N.a.div(
					ct ||
						(ct = Object(k.a)([
							"\n\twidth: 100%;\n\theight: fit-content;\n\tmargin-top: 15px;\n\ttext-align: left;\n\tcolor: ",
							";\n\t.input {\n\t\twidth: 100%;\n\t\theight: 32px;\n\t\tbackground: var(--unnamed-color-f4f4f5) 0% 0% no-repeat padding-box;\n\t\tbackground: #f4f4f5 0% 0% no-repeat padding-box;\n\t\tborder-radius: 5px;\n\t\tborder: ",
							";\n\n\t\tpadding: 5px;\n\t\t&:focus {\n\t\t\toutline: none;\n\t\t}\n\t}\n\t.warning {\n\t\tdisplay: ",
							";\n\t}\n",
						])),
					function (t) {
						return "invalid" === t.error
							? " #DC2626!important"
							: "valid" === t.error
							? " #4F8CE3"
							: "none";
					},
					function (t) {
						return "invalid" === t.error
							? "1px solid #DC2626!important"
							: "valid" === t.error
							? "1px solid #4F8CE3"
							: "none";
					},
					function (t) {
						return "invalid" === t.error ? "block" : "none";
					}
				),
				cn = N.a.div(
					dt ||
						(dt = Object(k.a)([
							"\n\twidth: 320px;\n\theight: 31px;\n\tbackground: var(--unnamed-color-2865b3) 0% 0% no-repeat padding-box;\n\tbackground: #2865b3 0% 0% no-repeat padding-box;\n\tborder-radius: 8px;\n\tborder: none;\n\tcolor: #fff;\n\tpadding-top: 4px;\n\tmargin: 0 auto;\n\tmargin-top: 28px;\n\tcursor: pointer;\n\tfont: normal normal bold 14px/21px Poppins;\n\tletter-spacing: 0.02px;\n\tbackground: #f2f2f3 0% 0% no-repeat padding-box;\n\tborder-radius: 8px;\n\ttext-align: center;\n\tfont: normal normal bold 14px/21px Poppins;\n\tletter-spacing: 0.02px;\n\tcolor: #a1a1aa;\n\topacity: 1;\n",
						]))
				),
				dn = {
					position: "absolute",
					top: "55%",
					left: "50%",
					transform: "translate(-50%, -50%)",
					width: "425px",
					outline: "none",
					padding: "39px 49px",
					background: "#FFFFFF 0% 0% no-repeat padding-box",
					boxShadow: " 0px 3px 10px #0000001F",
					borderRadius: "15px",
				},
				mn = function (t) {
					var n = t.open,
						e = t.setOpen,
						a = t.onClose,
						r = t.onNext,
						o = Object(m.useState)(!1),
						l = Object(z.a)(o, 2),
						i = l[0],
						p = l[1],
						c = Object(m.useState)(""),
						d = Object(z.a)(c, 2),
						u = d[0],
						f = d[1],
						g = Object(m.useState)(""),
						x = Object(z.a)(g, 2),
						h = x[0],
						b = x[1],
						v = Object(m.useState)(""),
						E = Object(z.a)(v, 2),
						w = E[0],
						y = E[1],
						k = Object(m.useState)(""),
						N = Object(z.a)(k, 2),
						j = N[0],
						A = N[1],
						O = Object(m.useState)(""),
						C = Object(z.a)(O, 2),
						S = C[0],
						P = C[1],
						G = Object(m.useState)(""),
						F = Object(z.a)(G, 2),
						I = F[0],
						D = F[1],
						R = Object(m.useState)(!1),
						B = Object(z.a)(R, 2),
						U = B[0],
						V = B[1],
						L = Object(m.useState)(!1),
						Q = Object(z.a)(L, 2),
						Y = Q[0],
						J = Q[1];
					return s.a.createElement(
						"div",
						null,
						s.a.createElement(
							q.a,
							{
								open: n,
								"aria-labelledby": "modal-modal-title",
								"aria-describedby": "modal-modal-description",
							},
							s.a.createElement(
								K.a,
								{ sx: dn },
								s.a.createElement(
									M,
									{
										open: n,
										handleOpen: function () {
											e(!0);
										},
									},
									s.a.createElement(
										ln,
										null,
										s.a.createElement(
											"h4",
											{ className: "title" },
											"Create Team Match"
										),
										s.a.createElement(
											"button",
											{ className: "close", onClick: a },
											"X"
										),
										s.a.createElement(
											pn,
											{ error: i ? (u.length < 1 ? "invalid" : "valid") : "" },
											s.a.createElement(
												"p",
												{ className: "input-title" },
												"Match name "
											),
											s.a.createElement("input", {
												type: "text",
												className: "input",
												onChange: function (t) {
													return f(t.target.value);
												},
											}),
											s.a.createElement(
												"p",
												{ className: "warning" },
												"This field is required"
											)
										),
										s.a.createElement(
											pn,
											{ error: i ? (h.length < 1 ? "invalid" : "valid") : "" },
											s.a.createElement(
												"p",
												{ className: "input-title" },
												"Game "
											),
											s.a.createElement(
												"select",
												{
													className: "input",
													onChange: function (t) {
														return b(t.target.value);
													},
												},
												s.a.createElement("option", {
													selected: "true",
													value: "",
													disabled: "disabled",
												}),
												s.a.createElement("option", null, "Valorant"),
												s.a.createElement("option", null, "League of Lefends"),
												s.a.createElement("option", null, "Team Fight Tactics"),
												s.a.createElement(
													"option",
													null,
													"Legends of Runeterra"
												)
											),
											s.a.createElement(
												"p",
												{ className: "warning" },
												"This field is required"
											)
										),
										s.a.createElement(
											pn,
											{ error: i ? (w.length < 1 ? "invalid" : "valid") : "" },
											s.a.createElement(
												"p",
												{ className: "input-title" },
												"Match date "
											),
											s.a.createElement("input", {
												type: "date",
												className: "input",
												onChange: function (t) {
													return y(t.target.value);
												},
											}),
											s.a.createElement(
												"p",
												{ className: "warning" },
												"This field is required"
											)
										),
										s.a.createElement(
											pn,
											{ error: i ? (j.length < 1 ? "invalid" : "valid") : "" },
											s.a.createElement(
												"p",
												{ className: "input-title info" },
												"Loot amount ",
												s.a.createElement(_t.b, {
													onClick: function () {
														return V(!U);
													},
												}),
												U &&
													s.a.createElement(
														"div",
														{ className: "menu" },
														s.a.createElement(
															"p",
															null,
															"Pool in money per team from P0 to P2000. Winnings split evenly."
														)
													)
											),
											s.a.createElement("input", {
												type: "text",
												className: "input",
												onChange: function (t) {
													return A(t.target.value);
												},
											}),
											s.a.createElement(
												"p",
												{ className: "warning" },
												"This field is required"
											)
										),
										s.a.createElement(
											pn,
											{ error: i ? (S.length < 1 ? "invalid" : "valid") : "" },
											s.a.createElement(
												"p",
												{ className: "input-title" },
												"Match Details"
											),
											s.a.createElement("textarea", {
												name: "",
												className: "input",
												id: "",
												cols: "30",
												rows: "20",
												style: { minHeight: "60px" },
												onChange: function (t) {
													return P(t.target.value);
												},
											})
										),
										s.a.createElement(
											pn,
											{ error: i ? (I.length < 1 ? "invalid" : "valid") : "" },
											s.a.createElement(
												"p",
												{ className: "input-title info" },
												"Gamertag ",
												s.a.createElement(_t.b, {
													onClick: function () {
														return J(!Y);
													},
												}),
												Y &&
													s.a.createElement(
														"div",
														{ className: "menu" },
														s.a.createElement(
															"p",
															null,
															"Your gamertag is displayed in the Match Page for others to add you."
														)
													)
											),
											s.a.createElement("input", {
												type: "text",
												className: "input",
												onChange: function (t) {
													return D(t.target.value);
												},
											}),
											s.a.createElement(
												"p",
												{ className: "warning" },
												"This field is required"
											)
										),
										s.a.createElement(
											cn,
											{
												onClick: function () {
													u.length < 1 ||
													h.length < 1 ||
													w.length < 1 ||
													j.length < 1 ||
													S.length < 1 ||
													I.length < 1
														? p(!0)
														: (p(!1),
														  y(""),
														  P(""),
														  A(""),
														  f(""),
														  D(""),
														  b(""),
														  r());
												},
											},
											"NEXT"
										)
									)
								)
							)
						)
					);
				},
				sn = N.a.div(
					mt ||
						(mt = Object(k.a)([
							"\n\tposition: fixed;\n\ttop: 0;\n\tleft: 0;\n\tdisplay: grid;\n\tgrid-template-columns: 150px 393px 1fr 50px;\n\tpadding: 12px 140px;\n\theight: 56px;\n\twidth: 100vw;\n\tbackground-color: #fff;\n\tz-index: 999999999999999999999999999999999999999999999999;\n\tbackground: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;\n\tbackground: #ffffff 0% 0% no-repeat padding-box;\n\tbox-shadow: 0px 3px 6px #00000029;\n\topacity: 1;\n\th1 {\n\t\tfont: var(--unnamed-font-style-normal) normal\n\t\t\tvar(--unnamed-font-weight-normal) var(--unnamed-font-size-18) /\n\t\t\tvar(--unnamed-line-spacing-27) var(--unnamed-font-family-poppins);\n\t\tletter-spacing: var(--unnamed-character-spacing-0);\n\t\tcolor: var(--unnamed-color-3f3f46);\n\t\ttext-align: left;\n\t\tfont: normal normal normal 18px/27px Poppins;\n\t\tletter-spacing: 0px;\n\t\tcolor: #3f3f46;\n\t}\n\t.menu {\n\t\tposition: absolute;\n\t\ttop: 40px;\n\t\tpadding: 25px 20px;\n\t\tright: -55px;\n\t\tbackground: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;\n\t\tbackground: #ffffff 0% 0% no-repeat padding-box;\n\t\tbox-shadow: 0px 3px 10px #00000029;\n\t\tborder-radius: 10px;\n\t\twidth: 198px;\n\t\theight: 119px;\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tjustify-content: space-around;\n\t\ta {\n\t\t\tfont: var(--unnamed-font-style-normal) normal\n\t\t\t\tvar(--unnamed-font-weight-bold) var(--unnamed-font-size-17) / 24px\n\t\t\t\tvar(--unnamed-font-family-source-sans-pro);\n\t\t\tletter-spacing: var(--unnamed-character-spacing-0-02);\n\t\t\tcolor: var(--unnamed-color-ba3c3d);\n\t\t\ttext-align: left;\n\t\t\tfont: normal normal bold 17px/24px Source Sans Pro;\n\t\t\tletter-spacing: 0.02px;\n\t\t\tcolor: #ef4444;\n\t\t\tpadding: 0;\n\t\t\tmargin: 0;\n\t\t\tbackground-color: transparent;\n\t\t\tborder: none;\n\t\t}\n\t}\n\t.right {\n\t\tdisplay: grid;\n\t\tgrid-template-columns: 130px 144px 72px;\n\t\tgrid-gap: 22px;\n\t\tmargin-left: 47px;\n\t\tposition: relative;\n\t\tjustify-self: end;\n\t}\n\t.info {\n\t\tfont: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-300)\n\t\t\tvar(--unnamed-font-size-14) / var(--unnamed-line-spacing-21)\n\t\t\tvar(--unnamed-font-family-poppins);\n\t\tletter-spacing: var(--unnamed-character-spacing-0-17);\n\t\tcolor: var(--unnamed-color-3f3f46);\n\t\ttext-align: center;\n\t\tfont: normal normal 300 14px/21px Poppins;\n\t\tletter-spacing: 0.17px;\n\t\tcolor: #3f3f46;\n\t\tpadding-top: 10px;\n\t}\n\t.red-link {\n\t\twidth: 100%;\n\t\theight: 20px;\n\t\tfont: var(--unnamed-font-style-normal) normal\n\t\t\tvar(--unnamed-font-weight-medium) var(--unnamed-font-size-14) /\n\t\t\tvar(--unnamed-line-spacing-21) var(--unnamed-font-family-poppins);\n\t\tcolor: var(--unnamed-color-ef4444);\n\t\ttext-align: left;\n\t\tfont: normal normal medium 14px/21px Poppins;\n\t\tletter-spacing: 0.23px;\n\t\tcolor: #ef4444;\n\t\tborder: none;\n\t\tbackground-color: transparent;\n\t\tpadding-top: 4px;\n\t}\n\t.person {\n\t\tborder: none;\n\t\tbackground-color: transparent;\n\t\theight: fit-content;\n\t\twidth: fit-content;\n\t\tmargin: 10px;\n\t\timg {\n\t\t\twidth: 20px;\n\t\t\theight: 20px;\n\t\t}\n\t}\n\t@media screen and (max-width: 600px) {\n\t\theight: fit-content;\n\t\tmax-height: 15vh;\n\t\tpadding: 10px;\n\t\tgrid-template-columns: 100px 1fr;\n\t\tmax-width: 100vw;\n\t\tdisplay: none;\n\t\t.right {\n\t\t\tdisplay: flex;\n\t\t\tjustify-content: space-between;\n\t\t\twidth: 95vw;\n\t\t\tmargin-top: 15px;\n\t\t}\n\t}\n",
						]))
				),
				un = Object(w.a)("div")(function (t) {
					t.theme;
					return {
						position: "relative",
						background: "#F0F0F0",
						borderRadius: "8px",
						height: "31px",
						maxWidth: "376px!important",
						padding: "5px",
					};
				}),
				fn = Object(w.a)("div")(function (t) {
					t.theme;
					return {
						fontSize: "22px",
						position: "absolute",
						pointerEvents: "none",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						right: "20px",
					};
				}),
				gn = Object(w.a)(E.a)(function (t) {
					return {
						color: "inherit",
						fontSize: "22px",
						width: "100%",
						"& .MuiInputBase-input": {
							padding: "0",
							fontSize: "14px",
							paddingLeft: "10px",
							transition: t.theme.transitions.create("width"),
							width: "100%",
						},
					};
				}),
				xn = function (t) {
					var n = Object(m.useState)(!1),
						e = Object(z.a)(n, 2),
						a = e[0],
						r = e[1],
						o = Object(m.useState)(!1),
						l = Object(z.a)(o, 2),
						i = l[0],
						p = l[1],
						c = Object(m.useState)(!1),
						d = Object(z.a)(c, 2),
						u = d[0],
						f = d[1],
						x = Object(m.useState)(!1),
						h = Object(z.a)(x, 2),
						b = h[0],
						v = h[1],
						E = function () {
							p(!0), f(!1), v(!1);
						},
						w = function () {
							f(!0), p(!1), v(!1);
						},
						k = function () {
							f(!1), p(!1), v(!1);
						};
					return s.a.createElement(
						sn,
						null,
						s.a.createElement(
							g.b,
							{ to: "/" },
							s.a.createElement("h1", null, "PEWPOG")
						),
						s.a.createElement(
							un,
							null,
							s.a.createElement(fn, null, s.a.createElement(y.a, null)),
							s.a.createElement(gn, {
								placeholder: "Search\u2026",
								inputProps: { "aria-label": "search" },
							})
						),
						s.a.createElement(
							"div",
							{ className: "right" },
							s.a.createElement(
								"button",
								{ className: "red-link", onClick: E },
								"Solo Match",
								s.a.createElement(Wt.b, {
									style: { fontSize: "23px", marginLeft: "7px" },
								})
							),
							s.a.createElement(
								"button",
								{ className: "red-link", onClick: w },
								"Team Match",
								" ",
								s.a.createElement($t.a, {
									style: { fontSize: "32px", marginLeft: "7px" },
								})
							),
							s.a.createElement(
								"p",
								{ className: "info" },
								s.a.createElement("p", null, "2,123 pogs")
							),
							a &&
								s.a.createElement(
									"div",
									{ className: "menu" },
									s.a.createElement(
										g.b,
										{
											to: "/currency-store",
											onClick: function () {
												r(!a);
											},
										},
										s.a.createElement(_t.a, { style: { marginRight: "10px" } }),
										" Buy pogs"
									),
									s.a.createElement(
										g.b,
										{
											to: "/setting",
											onClick: function () {
												r(!a);
											},
										},
										s.a.createElement(Wt.a, { style: { marginRight: "10px" } }),
										" Account settings"
									)
								)
						),
						s.a.createElement(
							"button",
							{
								className: "person",
								onClick: function () {
									return r(!a);
								},
							},
							s.a.createElement("img", { src: bt.a, alt: "avatar" })
						),
						s.a.createElement(on, { open: i, setOpen: E, onClose: k }),
						s.a.createElement(mn, {
							open: u,
							setOpen: w,
							onClose: k,
							onNext: function () {
								f(!1), p(!1), v(!0);
							},
						}),
						s.a.createElement(an, {
							open: b,
							setOpen: function () {
								p(!1), f(!1), v(!0);
							},
							onClose: k,
						})
					);
				},
				hn = e(82),
				bn = N.a.div(
					st ||
						(st = Object(k.a)([
							"\n\tposition: fixed;\n\ttop: 0;\n\tleft: 0;\n\tdisplay: grid;\n\tgrid-template-columns: 150px 50vw 1fr;\n\tpadding: 0px 140px;\n\theight: fit-content !important;\n\twidth: 100vw;\n\tbackground-color: #fff;\n\tz-index: 999999999999999999999999999999999999999999999999;\n\tbackground: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;\n\tbackground: #ffffff 0% 0% no-repeat padding-box;\n\tbox-shadow: 0px 3px 6px #00000029;\n\topacity: 1;\n\tdisplay: none;\n\t.mobile {\n\t\tdisplay: none;\n\t}\n\th1 {\n\t\tfont: var(--unnamed-font-style-normal) normal\n\t\t\tvar(--unnamed-font-weight-normal) var(--unnamed-font-size-18) /\n\t\t\tvar(--unnamed-line-spacing-27) var(--unnamed-font-family-poppins);\n\t\tletter-spacing: var(--unnamed-character-spacing-0);\n\t\tcolor: var(--unnamed-color-3f3f46);\n\t\ttext-align: left;\n\t\tfont: normal normal normal 18px/27px Poppins;\n\t\tletter-spacing: 0px;\n\t\tcolor: #3f3f46;\n\t}\n\t.right {\n\t\twidth: 85vw;\n\t\tmargin: 10px 15px !important;\n\n\t\tmargin-top: 10px;\n\t\tdisplay: grid;\n\t\tgrid-template-columns: 1fr 1fr;\n\t\tgrid-gap: 22px;\n\t\tposition: relative;\n\t}\n\t.outline-red {\n\t\tbackground: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;\n\t\tborder: 1px solid var(---d44244);\n\t\tbackground: #ffffff 0% 0% no-repeat padding-box;\n\t\tborder: 1px solid #d44244;\n\t\tborder-radius: 15px;\n\t\tfont: var(--unnamed-font-style-normal) normal\n\t\t\tvar(--unnamed-font-weight-bold) var(--unnamed-font-size-17) / 24px\n\t\t\tvar(--unnamed-font-family-source-sans-pro);\n\t\tletter-spacing: var(--unnamed-character-spacing-0-02);\n\t\tcolor: var(---d44244);\n\n\t\tfont: normal normal bold 17px/24px Source Sans Pro;\n\t\tletter-spacing: 0.02px;\n\t\tcolor: #d44244;\n\t\ttext-align: center;\n\t\tpadding-top: 0px;\n\t\theight: 40px;\n\t}\n\t.fill-red {\n\t\tbackground: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;\n\t\tborder: 1px solid var(---d44244);\n\t\tbackground: #ffffff 0% 0% no-repeat padding-box;\n\t\tborder: 1px solid #d44244;\n\t\tborder-radius: 15px;\n\t\tfont: var(--unnamed-font-style-normal) normal\n\t\t\tvar(--unnamed-font-weight-bold) var(--unnamed-font-size-17) / 24px\n\t\t\tvar(--unnamed-font-family-source-sans-pro);\n\t\tletter-spacing: var(--unnamed-character-spacing-0-02);\n\t\tcolor: var(---d44244);\n\t\ttext-align: center;\n\t\tfont: normal normal bold 17px/24px Source Sans Pro;\n\t\tletter-spacing: 0.02px;\n\t\tcolor: #d44244;\n\t\tpadding-top: 0px;\n\t\theight: 40px;\n\t}\n\t.info {\n\t\tp {\n\t\t\tfont: var(--unnamed-font-style-normal) normal\n\t\t\t\tvar(--unnamed-font-weight-bold) var(--unnamed-font-size-17) / 24px\n\t\t\t\tvar(--unnamed-font-family-source-sans-pro);\n\t\t\tletter-spacing: var(--unnamed-character-spacing-0-02);\n\t\t\tcolor: var(--unnamed-color-4a4a4a);\n\t\t\ttext-align: right;\n\t\t\tfont: normal normal bold 17px/24px Source Sans Pro;\n\t\t\tletter-spacing: 0.02px;\n\t\t\tcolor: #4a4a4a;\n\t\t\tline-height: 20px;\n\t\t\tmargin: 0;\n\t\t\tpadding: 0;\n\t\t}\n\t}\n\t.menu {\n\t\tposition: absolute;\n\t\ttop: 50px;\n\t\tpadding: 25px 20px;\n\t\tright: 10px;\n\t\tbackground: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;\n\t\tbackground: #ffffff 0% 0% no-repeat padding-box;\n\t\tbox-shadow: 0px 3px 10px #00000029;\n\t\tborder-radius: 10px;\n\t\twidth: 198px;\n\t\theight: 119px;\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tjustify-content: space-around;\n\t\tz-index: 999999999999999999999999999999999999999999999999;\n\t\ta {\n\t\t\tfont: var(--unnamed-font-style-normal) normal\n\t\t\t\tvar(--unnamed-font-weight-bold) var(--unnamed-font-size-17) / 24px\n\t\t\t\tvar(--unnamed-font-family-source-sans-pro);\n\t\t\tletter-spacing: var(--unnamed-character-spacing-0-02);\n\t\t\tcolor: var(--unnamed-color-ba3c3d);\n\t\t\ttext-align: left;\n\t\t\tfont: normal normal bold 17px/24px Source Sans Pro;\n\t\t\tletter-spacing: 0.02px;\n\t\t\tcolor: #ef4444;\n\t\t\tpadding: 0;\n\t\t\tmargin: 0;\n\t\t\tbackground-color: transparent;\n\t\t\tborder: none;\n\t\t}\n\t}\n\t.person {\n\t\twidth: 70px !important;\n\t\tborder: none;\n\t\tpadding: 0;\n\t\tmargin: 0;\n\t\tbackground: transparent;\n\t\tfont-size: 50px;\n\t\tmargin-top: -25px;\n\t\tcolor: #a2a2a2;\n\t}\n\t@media screen and (max-width: 600px) {\n\t\theight: fit-content;\n\t\tdisplay: grid;\n\t\tpadding: 10px;\n\t\tgrid-template-columns: 100px 1fr 70px;\n\t\tmax-width: 100vw;\n\t\tmax-height: 20vh;\n\t\t.outline-red,\n\t\t.fill-red {\n\t\t\tfont-size: 11px !important;\n\t\t}\n\t\t.desktop {\n\t\t\tdisplay: none;\n\t\t}\n\t\t.mobile {\n\t\t\tdisplay: grid;\n\t\t\tgrid-template-columns: 100px 1fr 100px;\n\t\t\tpadding: 0;\n\t\t}\n\t}\n",
						]))
				),
				vn = Object(w.a)("div")(function (t) {
					t.theme;
					return {
						position: "relative",
						background: "#F0F0F0",
						borderRadius: "10px",
						height: "40px",
						maxWidth: "95%!important",
						padding: "10px",
					};
				}),
				En = Object(w.a)("div")(function (t) {
					t.theme;
					return {
						fontSize: "22px",
						position: "absolute",
						pointerEvents: "none",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						right: "20px",
					};
				}),
				wn = Object(w.a)(E.a)(function (t) {
					return {
						color: "inherit",
						fontSize: "22px",
						width: "100%",
						"& .MuiInputBase-input": {
							padding: "0",
							fontSize: "14px",
							paddingLeft: "10px",
							transition: t.theme.transitions.create("width"),
							width: "100%",
						},
					};
				}),
				yn = function (t) {
					var n = Object(m.useState)(!1),
						e = Object(z.a)(n, 2),
						a = e[0],
						r = e[1],
						o = Object(m.useState)(!1),
						l = Object(z.a)(o, 2),
						i = l[0],
						p = l[1],
						c = Object(m.useState)(!1),
						d = Object(z.a)(c, 2),
						u = d[0],
						f = d[1],
						x = Object(m.useState)(!1),
						h = Object(z.a)(x, 2),
						b = h[0],
						v = h[1],
						E = function () {
							p(!0), f(!1), v(!1);
						},
						w = function () {
							f(!0), p(!1), v(!1);
						},
						k = function () {
							f(!1), p(!1), v(!1);
						};
					return s.a.createElement(
						bn,
						{ style: { display: (i || u || b) && "none" } },
						s.a.createElement(on, { open: i, setOpen: E, onClose: k }),
						s.a.createElement(mn, {
							open: u,
							setOpen: w,
							onClose: k,
							onNext: function () {
								f(!1), p(!1), v(!0);
							},
						}),
						s.a.createElement(an, {
							open: b,
							setOpen: function () {
								p(!1), f(!1), v(!0);
							},
							onClose: k,
						}),
						s.a.createElement(
							g.b,
							{ to: "/" },
							s.a.createElement("h1", { className: "logo" }, "PEWPOG")
						),
						s.a.createElement(
							vn,
							null,
							s.a.createElement(En, null, s.a.createElement(y.a, null)),
							s.a.createElement(wn, {
								placeholder: "Search\u2026",
								inputProps: { "aria-label": "search" },
							})
						),
						a &&
							s.a.createElement(
								"div",
								{ className: "menu" },
								s.a.createElement(
									g.b,
									{
										to: "/currency-store",
										onClick: function () {
											r(!a);
										},
									},
									s.a.createElement(_t.a, { style: { marginRight: "10px" } }),
									" Buy pogs"
								),
								s.a.createElement(
									g.b,
									{
										to: "/setting",
										onClick: function () {
											r(!a);
										},
									},
									s.a.createElement(Wt.a, { style: { marginRight: "10px" } }),
									" Account settings"
								)
							),
						s.a.createElement(
							"button",
							{
								className: "person",
								onClick: function () {
									return r(!a);
								},
							},
							s.a.createElement(hn.a, null)
						),
						s.a.createElement(
							"div",
							{ className: "right" },
							s.a.createElement(
								"button",
								{ className: "outline-red", onClick: E },
								"Solo Match",
								s.a.createElement(Wt.b, {
									style: { fontSize: "23px", marginLeft: "7px" },
								})
							),
							s.a.createElement(
								"button",
								{ className: "fill-red", onClick: w },
								"Team Match",
								" ",
								s.a.createElement($t.a, {
									style: { fontSize: "32px", marginLeft: "7px" },
								})
							)
						)
					);
				},
				kn =
					(e(110),
					function (t) {
						var n = t.children;
						return s.a.createElement(
							"main",
							null,
							s.a.createElement(xn, null),
							s.a.createElement(yn, null),
							s.a.createElement("div", { className: "main_body" }, n)
						);
					}),
				Nn = N.a.div(
					ut ||
						(ut = Object(k.a)([
							"\n\tbackground-color: #dc2626;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\tposition: relative;\n\tbox-shadow: 0px 3px 10px #00000029;\n\tborder-radius: 10px;\n\tpadding: 70px 30px;\n\tcolor: #fff;\n\tgap: 16px;\n\t.price {\n\t\tposition: absolute;\n\t\tbottom: 0;\n\t}\n",
						]))
				),
				jn = e(83),
				An = e.n(jn),
				On = e(84),
				Cn = e.n(On);
			var Sn,
				Pn,
				zn,
				Gn,
				Fn,
				In,
				Dn,
				Rn,
				Bn,
				Un,
				Vn,
				Ln,
				Kn,
				qn,
				Qn,
				Mn,
				Yn = function (t) {
					var n = t.img,
						e = t.pog,
						a = t.price,
						r = t.handleOpen;
					return s.a.createElement(
						Nn,
						{ onClick: r },
						s.a.createElement("img", { src: n ? An.a : Cn.a, alt: n }),
						s.a.createElement("h3", { className: "pogs" }, e, " pogs"),
						s.a.createElement("p", { className: "price" }, "$ ", a)
					);
				},
				Jn = N.a.div(
					Sn ||
						(Sn = Object(k.a)([
							"\n\twidth: 100%;\n\theight: 100%;\n\n\ttext-align: center;\n\n\t.title {\n\t\tfont: var(--unnamed-font-style-normal) normal\n\t\t\tvar(--unnamed-font-weight-normal) var(--unnamed-font-size-23) /\n\t\t\tvar(--unnamed-line-spacing-34) var(--unnamed-font-family-poppins);\n\t\tletter-spacing: var(--unnamed-character-spacing-0);\n\t\tcolor: var(--unnamed-color-000000);\n\t\ttext-align: center;\n\t\tfont: normal normal normal 23px/34px Poppins;\n\t\tletter-spacing: 0px;\n\t\tcolor: #000000;\n\t}\n\t.sub-title {\n\t\tfont: var(--unnamed-font-style-normal) normal\n\t\t\tvar(--unnamed-font-weight-normal) var(--unnamed-font-size-16) /\n\t\t\tvar(--unnamed-line-spacing-22) var(--unnamed-font-family-source-sans-pro);\n\t\tletter-spacing: var(--unnamed-character-spacing-0-01);\n\t\tcolor: var(--unnamed-color-000000);\n\t\ttext-align: center;\n\t\tfont: normal normal normal 16px/22px Source Sans Pro;\n\t\tletter-spacing: 0.01px;\n\t\tcolor: #000000;\n\t}\n\t.input {\n\t\twidth: 100%;\n\t\tborder: none;\n\t\tbackground-color: #f0f0f0;\n\t\theight: 40px;\n\t\tborder-radius: 10px;\n\t\tpadding-left: 10px;\n\t\tpadding-right: 20px;\n\t\tcolor: #0000008d;\n\t\t&:focus {\n\t\t\toutline: none;\n\t\t}\n\t}\n\t.select:after {\n\t\tcolor: red !important;\n\t}\n\t.input-title {\n\t\tmargin-bottom: 2px;\n\t}\n\n\t.sub-title {\n\t\tfont-size: 16px;\n\t}\n\t@media screen and (max-width: 600px) {\n\t\tmax-width: 90vw;\n\t}\n\t.info {\n\t\tposition: relative;\n\t}\n\t.menu {\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tpadding: 10px;\n\t\tright: 0px;\n\t\tbackground: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;\n\t\tbackground: #ffffff 0% 0% no-repeat padding-box;\n\t\tbox-shadow: 0px 3px 10px #00000029;\n\t\tborder-radius: 10px;\n\t\twidth: 200px;\n\t\theight: 72px;\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tjustify-content: space-around;\n\t}\n\tp {\n\t\tfont-size: 14px;\n\t}\n",
						]))
				),
				Tn =
					(N.a.div(
						Pn ||
							(Pn = Object(k.a)([
								"\n\twidth: 100%;\n\theight: fit-content;\n\tmargin-top: 15px;\n\ttext-align: left;\n",
							]))
					),
					N.a.div(
						zn ||
							(zn = Object(k.a)([
								"\n\twidth: 140px;\n\theight: 40px;\n\tbackground: var(--unnamed-color-2865b3) 0% 0% no-repeat padding-box;\n\tbackground: #2865b3 0% 0% no-repeat padding-box;\n\tborder-radius: 15px;\n\tborder: none;\n\tcolor: #fff;\n\tpadding-top: 8px;\n\tmargin: 0 auto;\n\tmargin-top: 28px;\n\tcursor: pointer;\n",
							]))
					)),
				Wn = e(85),
				Hn = e.n(Wn),
				Xn = function (t) {
					var n = t.open,
						e = t.handleClose,
						a = t.handleOpen;
					return s.a.createElement(
						M,
						{ open: n, handleOpen: a, handleClose: !0 },
						s.a.createElement(
							Jn,
							null,
							s.a.createElement("h4", { className: "title" }, "Payment"),
							s.a.createElement("p", { className: "sub-title" }),
							s.a.createElement("img", {
								src: Hn.a,
								alt: "",
								className: "payment",
							}),
							s.a.createElement(Tn, { onClick: e }, "Submit")
						)
					);
				},
				Zn = N.a.div(
					Gn ||
						(Gn = Object(k.a)([
							"\n\tdisplay: flex;\n\tflex-direction: column;\n\twidth: 100%;\n\tmargin-top: 50px;\n\tpadding: 80px 140px;\n\t.title {\n\t\tfont: var(--unnamed-font-style-normal) normal\n\t\t\tvar(--unnamed-font-weight-bold) var(--unnamed-font-size-30) /\n\t\t\tvar(--unnamed-line-spacing-46) var(--unnamed-font-family-poppins);\n\t\tletter-spacing: var(--unnamed-character-spacing-0);\n\t\tcolor: var(--unnamed-color-4a4a4a);\n\t\ttext-align: left;\n\t\tfont: normal normal bold 30px/46px Poppins;\n\t\tletter-spacing: 0px;\n\t\tcolor: #4a4a4a;\n\t}\n\t.pages {\n\t\tdisplay: grid;\n\t\tgrid-template-columns: repeat(6, 180px);\n\t\tgrid-gap: 16px;\n\t\tmargin-top: 71px;\n\t}\n\n\t@media (max-width: 768px) {\n\t\t.pages {\n\t\t\tdisplay: grid;\n\t\t\tgrid-template-columns: 1fr;\n\t\t\tpadding-top: 0px;\n\t\t\tmargin-top: 30px !important;\n\t\t\tgap: 30px;\n\t\t}\n\t\tmargin: 0rem;\n\t\tpadding: 100px 30px !important;\n\t\tmax-width: 100vw;\n\t}\n",
						]))
				),
				_n = function () {
					var t = Object(m.useState)(!1),
						n = Object(z.a)(t, 2),
						e = n[0],
						a = n[1],
						r = function () {
							a(!0);
						};
					return s.a.createElement(
						Zn,
						null,
						s.a.createElement("h2", { className: "title" }, "Store"),
						s.a.createElement(
							"div",
							{ className: "pages" },
							[
								{ img: !1, pog: 500, price: 5 },
								{ img: !1, pog: 1e3, price: 10 },
								{ img: !1, pog: 1500, price: 15 },
								{ img: !1, pog: 2e3, price: 20 },
								{ img: !0, pog: 5e3, price: 50 },
								{ img: !0, pog: 1e4, price: 100 },
							].map(function (t) {
								return s.a.createElement(Yn, {
									img: t.img,
									pog: t.pog,
									handleOpen: r,
									price: t.price,
								});
							})
						),
						s.a.createElement(Xn, {
							open: e,
							handleClose: function () {
								return a(!1);
							},
							handleOpen: r,
						})
					);
				},
				$n = e(46),
				te = e(47),
				ne = e(89),
				ee = e(87),
				ae = N.a.div(
					Fn ||
						(Fn = Object(k.a)([
							"\n\twidth: 368px;\n\theight: 548px;\n\tbackground-color: #ffffff;\n\tborder-radius: 10px;\n\tpadding: 32px 24px;\n\ttext-align: center;\n\t.red {\n\t\tcolor: #4e80ee;\n\t\ttext-decoration: none !important;\n\t\ttext-align: left;\n\t}\n\th4 {\n\t\tfont: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-600)\n\t\t\tvar(--unnamed-font-size-19) / var(--unnamed-line-spacing-28)\n\t\t\tvar(--unnamed-font-family-poppins);\n\t\tletter-spacing: var(--unnamed-character-spacing-0);\n\t\tcolor: var(--unnamed-color-3f3f46);\n\t\ttext-align: center;\n\t\tfont: normal normal 600 19px/28px Poppins;\n\t\tletter-spacing: 0px;\n\t\tcolor: #3f3f46;\n\t}\n\t.input {\n\t\twidth: 100%;\n\t\tborder: none;\n\t\tbackground-color: #f0f0f0;\n\t\theight: 40px;\n\t\tborder-radius: 10px;\n\t\tpadding-left: 10px;\n\t\theight: 32px;\n\t\t/* UI Properties */\n\t\tbackground: var(--unnamed-color-f4f4f5) 0% 0% no-repeat padding-box;\n\t\tbackground: #f4f4f5 0% 0% no-repeat padding-box;\n\t\tborder-radius: 5px;\n\t\t&:focus {\n\t\t\toutline: none;\n\t\t}\n\t}\n\t.input-title {\n\t\tfont: var(--unnamed-font-style-normal) normal\n\t\t\tvar(--unnamed-font-weight-medium) var(--unnamed-font-size-14) /\n\t\t\tvar(--unnamed-line-spacing-21) var(--unnamed-font-family-poppins);\n\t\tletter-spacing: var(--unnamed-character-spacing-0-01);\n\t\tcolor: var(--unnamed-color-3f3f46);\n\t\ttext-align: left;\n\t\tfont: normal normal medium 14px/21px Poppins;\n\t\tletter-spacing: 0.01px;\n\t\tcolor: #3f3f46;\n\t}\n\t.sub-title {\n\t\tfont-size: 16px;\n\t}\n\t.top {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tjustify-content: space-between;\n\t\theight: 86%;\n\t}\n\t@media screen and (max-width: 600px) {\n\t\tmax-width: 90vw;\n\t}\n",
						]))
				),
				re = N.a.div(
					In ||
						(In = Object(k.a)([
							"\n\twidth: 100%;\n\theight: fit-content;\n\tmargin-top: 20px;\n\ttext-align: left;\n",
						]))
				),
				oe = N.a.div(
					Dn ||
						(Dn = Object(k.a)([
							"\n\twidth: 100%;\n\theight: 31px;\n\tbackground-color: #d44244;\n\ttext-align: center;\n\tcolor: #a1a1aa;\n\tborder-radius: 10px;\n\tpadding-top: 5px;\n\tfont-weight: bold;\n\tbackground: #f2f2f3 0% 0% no-repeat padding-box;\n\tborder-radius: 8px;\n\topacity: 1;\n\tcursor: pointer !important;\n",
						]))
				),
				le = function () {
					return s.a.createElement(
						ae,
						null,
						s.a.createElement("h4", null, "Login"),
						s.a.createElement(
							"p",
							{ className: "sub-title" },
							"New user ?",
							" ",
							s.a.createElement(
								g.b,
								{ to: "sign-up", className: "red" },
								"Create an account"
							)
						),
						s.a.createElement(
							"div",
							{ className: "top" },
							s.a.createElement(
								"div",
								null,
								s.a.createElement(
									re,
									null,
									s.a.createElement(
										"p",
										{ className: "input-title" },
										"Username"
									),
									s.a.createElement("input", {
										type: "text",
										className: "input",
									})
								),
								s.a.createElement(
									re,
									null,
									s.a.createElement(
										"p",
										{ className: "input-title" },
										"Password"
									),
									s.a.createElement("input", {
										type: "text",
										className: "input",
									})
								),
								s.a.createElement(
									"p",
									{
										className: "red",
										style: { marginTop: "10px", cursor: "pointer" },
									},
									"Forgot password"
								)
							),
							s.a.createElement(
								"div",
								null,
								s.a.createElement(oe, null, "Login")
							)
						)
					);
				},
				ie = e(49),
				pe = e.n(ie),
				ce = N.a.div(
					Rn ||
						(Rn = Object(k.a)([
							"\n\twidth: 100vw;\n\tmin-height: calc(100vh - 58px);\n\tbackground-image: url(",
							");\n\tbackground-size: 100vw calc(100vh - 58px);\n\tpadding: 0;\n\tpadding-top: 50px;\n\tpadding-bottom: 0;\n\n\t.title {\n\t\twidth: 100%;\n\t\ttext-align: center;\n\t\tfont: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-600)\n\t\t\tvar(--unnamed-font-size-58) / var(--unnamed-line-spacing-87)\n\t\t\tvar(--unnamed-font-family-poppins);\n\t\tletter-spacing: var(--unnamed-character-spacing--0-03);\n\t\tcolor: var(--unnamed-color-ffffff);\n\t\ttext-align: center;\n\t\tfont: normal normal 600 58px/87px Poppins;\n\t\tletter-spacing: -0.03px;\n\t\tcolor: #ffffff;\n\t}\n\t.forms {\n\t\tmargin-left: 50%;\n\t\ttransform: translateX(-50%);\n\t\tdisplay: grid;\n\n\t\tgrid-gap: 25px;\n\t\twidth: fit-content;\n\t\theight: 57vh;\n\t}\n\th4 {\n\t\tfont-size: 23px;\n\t}\n\t@media screen and (max-width: 600px) {\n\t\theight: fit-content !important;\n\t}\n",
						])),
					pe.a
				),
				de = (function (t) {
					Object(ne.a)(e, t);
					var n = Object(ee.a)(e);
					function e() {
						return Object($n.a)(this, e), n.apply(this, arguments);
					}
					return (
						Object(te.a)(e, [
							{
								key: "render",
								value: function () {
									return s.a.createElement(
										ce,
										null,
										s.a.createElement(
											"h1",
											{ className: "title" },
											"Welcome Pewpogger!"
										),
										s.a.createElement(
											"div",
											{ className: "forms" },
											s.a.createElement(le, null)
										)
									);
								},
							},
						]),
						e
					);
				})(m.Component),
				me = N.a.div(
					Bn ||
						(Bn = Object(k.a)([
							"\n\twidth: 368px;\n\theight: 548px;\n\tbackground-color: #ffffff;\n\tborder-radius: 10px;\n\tpadding: 32px 24px;\n\ttext-align: center;\n\t.red {\n\t\tcolor: #4e80ee;\n\t}\n\th4 {\n\t\tfont: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-600)\n\t\t\tvar(--unnamed-font-size-19) / var(--unnamed-line-spacing-28)\n\t\t\tvar(--unnamed-font-family-poppins);\n\t\tletter-spacing: var(--unnamed-character-spacing-0);\n\t\tcolor: var(--unnamed-color-3f3f46);\n\t\ttext-align: center;\n\t\tfont: normal normal 600 19px/28px Poppins;\n\t\tletter-spacing: 0px;\n\t\tcolor: #3f3f46;\n\t}\n\t.input {\n\t\twidth: 100%;\n\t\tborder: none;\n\t\tbackground-color: #f0f0f0;\n\t\theight: 40px;\n\t\tborder-radius: 10px;\n\t\tpadding-left: 10px;\n\t\theight: 32px;\n\t\t/* UI Properties */\n\t\tbackground: var(--unnamed-color-f4f4f5) 0% 0% no-repeat padding-box;\n\t\tbackground: #f4f4f5 0% 0% no-repeat padding-box;\n\t\tborder-radius: 5px;\n\t\t&:focus {\n\t\t\toutline: none;\n\t\t}\n\t}\n\t.input-title {\n\t\tfont: var(--unnamed-font-style-normal) normal\n\t\t\tvar(--unnamed-font-weight-medium) var(--unnamed-font-size-14) /\n\t\t\tvar(--unnamed-line-spacing-21) var(--unnamed-font-family-poppins);\n\t\tletter-spacing: var(--unnamed-character-spacing-0-01);\n\t\tcolor: var(--unnamed-color-3f3f46);\n\t\ttext-align: left;\n\t\tfont: normal normal medium 14px/21px Poppins;\n\t\tletter-spacing: 0.01px;\n\t\tcolor: #3f3f46;\n\t}\n\t.sub-title {\n\t\tfont-size: 16px;\n\t}\n\t@media screen and (max-width: 600px) {\n\t\tmax-width: 90vw;\n\t}\n",
						]))
				),
				se = N.a.div(
					Un ||
						(Un = Object(k.a)([
							"\n\twidth: 100%;\n\theight: fit-content;\n\tmargin-top: 20px;\n\ttext-align: left;\n",
						]))
				),
				ue = N.a.div(
					Vn ||
						(Vn = Object(k.a)([
							"\n\twidth: 100%;\n\theight: 31px;\n\tbackground-color: #d44244;\n\ttext-align: center;\n\tcolor: #a1a1aa;\n\tborder-radius: 10px;\n\tpadding-top: 5px;\n\tfont-weight: bold;\n\tbackground: #f2f2f3 0% 0% no-repeat padding-box;\n\tborder-radius: 8px;\n\topacity: 1;\n\tcursor: pointer !important;\n",
						]))
				),
				fe = function (t) {
					var n = t.setStep;
					return s.a.createElement(
						me,
						null,
						s.a.createElement("h4", null, "Signup"),
						s.a.createElement(
							"p",
							{ className: "sub-title" },
							"Already a user ?",
							" ",
							s.a.createElement(
								g.b,
								{ to: "sign-in", className: "red" },
								"Login"
							)
						),
						s.a.createElement(
							se,
							null,
							s.a.createElement("p", { className: "input-title" }, "Email *"),
							s.a.createElement("input", { type: "text", className: "input" })
						),
						s.a.createElement(
							se,
							null,
							s.a.createElement(
								"p",
								{ className: "input-title" },
								"Username *"
							),
							s.a.createElement("input", { type: "text", className: "input" })
						),
						s.a.createElement(
							se,
							null,
							s.a.createElement(
								"p",
								{ className: "input-title" },
								"Password *"
							),
							s.a.createElement("input", { type: "text", className: "input" })
						),
						s.a.createElement(
							se,
							null,
							s.a.createElement(
								"p",
								{ className: "input-title" },
								"Confirm Password *"
							),
							s.a.createElement("input", { type: "text", className: "input" })
						),
						s.a.createElement(
							ue,
							{
								style: { marginTop: "31px" },
								onClick: function () {
									return n(1);
								},
							},
							"Next"
						),
						s.a.createElement(
							"p",
							{ style: { marginTop: "20px" } },
							"Step 1 of 2"
						)
					);
				},
				ge = N.a.div(
					Ln ||
						(Ln = Object(k.a)([
							"\n\twidth: 368px;\n\theight: 548px;\n\tbackground-color: #ffffff;\n\tborder-radius: 10px;\n\tpadding: 32px 24px;\n\ttext-align: center;\n\t.red {\n\t\tcolor: #4e80ee;\n\t}\n\th4 {\n\t\tfont: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-600)\n\t\t\tvar(--unnamed-font-size-19) / var(--unnamed-line-spacing-28)\n\t\t\tvar(--unnamed-font-family-poppins);\n\t\tletter-spacing: var(--unnamed-character-spacing-0);\n\t\tcolor: var(--unnamed-color-3f3f46);\n\t\ttext-align: center;\n\t\tfont: normal normal 600 19px/28px Poppins;\n\t\tletter-spacing: 0px;\n\t\tcolor: #3f3f46;\n\t}\n\t.input {\n\t\twidth: 100%;\n\t\tborder: none;\n\t\tbackground-color: #f0f0f0;\n\t\theight: 40px;\n\t\tborder-radius: 10px;\n\t\tpadding-left: 10px;\n\t\theight: 32px;\n\t\t/* UI Properties */\n\t\tbackground: var(--unnamed-color-f4f4f5) 0% 0% no-repeat padding-box;\n\t\tbackground: #f4f4f5 0% 0% no-repeat padding-box;\n\t\tborder-radius: 5px;\n\t\t&:focus {\n\t\t\toutline: none;\n\t\t}\n\t}\n\t.input-title {\n\t\tfont: var(--unnamed-font-style-normal) normal\n\t\t\tvar(--unnamed-font-weight-medium) var(--unnamed-font-size-14) /\n\t\t\tvar(--unnamed-line-spacing-21) var(--unnamed-font-family-poppins);\n\t\tletter-spacing: var(--unnamed-character-spacing-0-01);\n\t\tcolor: var(--unnamed-color-3f3f46);\n\t\ttext-align: left;\n\t\tfont: normal normal medium 14px/21px Poppins;\n\t\tletter-spacing: 0.01px;\n\t\tcolor: #3f3f46;\n\t}\n\t.sub-title {\n\t\tfont-size: 16px;\n\t}\n\t.top {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tjustify-content: space-between;\n\t\theight: 90%;\n\t}\n\t@media screen and (max-width: 600px) {\n\t\tmax-width: 90vw;\n\t}\n",
						]))
				),
				xe = N.a.div(
					Kn ||
						(Kn = Object(k.a)([
							"\n\twidth: 100%;\n\theight: fit-content;\n\tmargin-top: 20px;\n\ttext-align: left;\n",
						]))
				),
				he = N.a.div(
					qn ||
						(qn = Object(k.a)([
							"\n\twidth: 100%;\n\theight: 31px;\n\tbackground-color: #d44244;\n\ttext-align: center;\n\tcolor: #a1a1aa;\n\tborder-radius: 10px;\n\tpadding-top: 5px;\n\tfont-weight: bold;\n\tbackground: #f2f2f3 0% 0% no-repeat padding-box;\n\tborder-radius: 8px;\n\topacity: 1;\n\tcursor: pointer !important;\n",
						]))
				),
				be = function () {
					return s.a.createElement(
						ge,
						null,
						s.a.createElement("h4", null, "Signup"),
						s.a.createElement(
							"p",
							{ className: "sub-title" },
							"Already a user ?",
							" ",
							s.a.createElement(
								g.b,
								{ to: "sign-in", className: "red" },
								"Login"
							)
						),
						s.a.createElement(
							"div",
							{ className: "top" },
							s.a.createElement(
								"div",
								null,
								s.a.createElement(
									xe,
									null,
									s.a.createElement(
										"p",
										{ className: "input-title" },
										"Date of Birth"
									),
									s.a.createElement("input", {
										type: "text",
										className: "input",
									})
								),
								s.a.createElement(
									xe,
									null,
									s.a.createElement(
										"p",
										{ className: "input-title" },
										"Riot ID"
									),
									s.a.createElement("input", {
										type: "text",
										className: "input",
									})
								)
							),
							s.a.createElement(
								"div",
								null,
								s.a.createElement(
									he,
									{ style: { marginTop: "25px" } },
									"SUBMIT"
								),
								s.a.createElement(
									"p",
									{ style: { marginTop: "20px" } },
									"Step 2 of 2"
								)
							)
						)
					);
				},
				ve = N.a.div(
					Qn ||
						(Qn = Object(k.a)([
							"\n\twidth: 100vw;\n\tmin-height: calc(100vh - 58px);\n\tbackground-image: url(",
							");\n\tbackground-size: 100vw calc(100vh - 58px);\n\tpadding: 0;\n\tpadding-top: 50px;\n\tpadding-bottom: 0;\n\n\t.title {\n\t\twidth: 100%;\n\t\ttext-align: center;\n\t\tfont: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-600)\n\t\t\tvar(--unnamed-font-size-58) / var(--unnamed-line-spacing-87)\n\t\t\tvar(--unnamed-font-family-poppins);\n\t\tletter-spacing: var(--unnamed-character-spacing--0-03);\n\t\tcolor: var(--unnamed-color-ffffff);\n\t\ttext-align: center;\n\t\tfont: normal normal 600 58px/87px Poppins;\n\t\tletter-spacing: -0.03px;\n\t\tcolor: #ffffff;\n\t}\n\t.forms {\n\t\tmargin-left: 50%;\n\t\ttransform: translateX(-50%);\n\t\tdisplay: grid;\n\n\t\tgrid-gap: 25px;\n\t\twidth: fit-content;\n\t\theight: 57vh;\n\t}\n\th4 {\n\t\tfont-size: 23px;\n\t}\n\t@media screen and (max-width: 600px) {\n\t\theight: fit-content !important;\n\t}\n",
						])),
					pe.a
				),
				Ee = function () {
					var t = Object(m.useState)(0),
						n = Object(z.a)(t, 2),
						e = n[0],
						a = n[1];
					return s.a.createElement(
						ve,
						null,
						s.a.createElement(
							"h1",
							{ className: "title" },
							"Welcome Pewpogger!"
						),
						s.a.createElement(
							"div",
							{ className: "forms" },
							0 === e
								? s.a.createElement(fe, { setStep: a })
								: s.a.createElement(be, null)
						)
					);
				},
				we = N.a.div(
					Mn ||
						(Mn = Object(k.a)([
							"\n\twidth: 100vw;\n\theight: calc(100vh -100px);\n\tpadding: 20px 140px;\n\tmargin: 0;\n\tpadding-bottom: 100px;\n\t.main-div {\n\t\tdisplay: flex;\n\t\tjustify-content: space-between;\n\t}\n\t.left-div {\n\t\tflex: 3;\n\t}\n\t.right-div {\n\t\tpadding-top: 20px;\n\t\tflex: 1;\n\n\t\t/* padding: 10px auto; */\n\t\tpadding-left: min(59px);\n\t}\n\t.red {\n\t\tbackground: var(---d44244) 0% 0% no-repeat padding-box;\n\t\tbackground: #d44244 0% 0% no-repeat padding-box;\n\t\tborder-radius: 15px;\n\t\tborder: none;\n\t\t/* padding: 6px !important; */\n\t\t/* margin-bottom: 10px; */\n\t\ttext-align: left;\n\t\tfont: normal normal bold 14px/21px Poppins;\n\t\tletter-spacing: 0.02px;\n\t\tcolor: #ffffff;\n\t\topacity: 1;\n\t\twidth: 80px;\n\t\tmargin-right: 10px;\n\t\ttext-align: center;\n\t\ttext-decoration: none;\n\t\twidth: 104px;\n\t\theight: 31px;\n\t\tbackground: #ca3a31 0% 0% no-repeat padding-box;\n\t\tborder-radius: 8px;\n\t}\n\t.back {\n\t\ttext-align: left;\n\t\tfont: normal normal 300 13px/24px Poppins;\n\t\tletter-spacing: 0px;\n\t\tcolor: #717179;\n\n\t\t/* text-decoration: underline; */\n\n\t\topacity: 1;\n\t}\n\t.match-row span {\n\t\tmargin: auto 10px;\n\t\t/* display: flex;\n    justify-content: space-around;\n    align-items: end; */\n\t}\n\t.sub-row {\n\t\tdisplay: flex;\n\t\tjustify-content: space-evenly;\n\t\talign-items: center;\n\t}\n\t.match-row span {\n\t\tflex: 1;\n\t}\n\n\t.sub-row span {\n\t\tflex: 1;\n\t}\n\t.edit {\n\t\ttext-align: left;\n\t\tfont: normal normal bold 16px/24px Poppins;\n\t\tletter-spacing: 0px;\n\t\tcolor: #4e80ee;\n\t\topacity: 1;\n\t\tmargin: auto 10px;\n\t}\n\t.match-name {\n\t\tdisplay: inline-block;\n\t\ttext-align: left;\n\t\tfont: normal normal bold 24px/51px Poppins;\n\t\tletter-spacing: 0.01px;\n\t\tcolor: #3f3f46;\n\t\topacity: 1;\n\t}\n\t.sub-title {\n\t\tfont: normal normal bold 16px/25px Poppins;\n\t\tletter-spacing: 0px;\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\tcolor: #0a0a0a;\n\t}\n\t.hero {\n\t\tmargin-top: 33.6px;\n\t\theight: 450px;\n\t\tobject-fit: cover;\n\t\twidth: 100%;\n\t\tborder: 1px solid #707070;\n\t\topacity: 1;\n\t}\n\tp {\n\t\tmargin-top: 14px;\n\t\tfont: var(--unnamed-font-style-normal) normal\n\t\t\tvar(--unnamed-font-weight-normal) var(--unnamed-font-size-16) /\n\t\t\tvar(--unnamed-line-spacing-22) var(--unnamed-font-family-source-sans-pro);\n\t\tletter-spacing: var(--unnamed-character-spacing-0-01);\n\t\tcolor: var(--unnamed-color-000000);\n\t\ttext-align: left;\n\t\tfont: normal normal normal 16px/22px Source Sans Pro;\n\t\tletter-spacing: 0.01px;\n\t\tcolor: #000000;\n\t\topacity: 1;\n\t}\n\t/* \n/////////////////////////////////////////////////////////////////////////////////\n*/\n\t.right-header {\n\t\ttext-align: left;\n\t\tmargin-bottom: 32px;\n\t\tfont: normal normal bold 16px/25px Poppins;\n\t\tletter-spacing: 0px;\n\t\tfont-weight: 800;\n\t\tcolor: #0a0a0a;\n\t}\n\t.user-container {\n\t\t/* max-width: 256px; */\n\t\t/* height: 40px; */\n\t\tmargin-bottom: 20px;\n\t\tdisplay: flex;\n\t\tjustify-content: space-between;\n\t\talign-items: center;\n\t\tborder: 2px solid black;\n\t\tborder-radius: 5px;\n\t\tpadding: 10px 16px;\n\t\tbox-shadow: -3px 3px black;\n\t}\n\t.player-profile {\n\t\twidth: 30px;\n\t\theight: 30px;\n\t\tmargin-right: 10px;\n\t}\n\t.user-name {\n\t\tfont: normal normal medium 14px/21px Poppins;\n\t\tletter-spacing: 0.01px;\n\t\tfont-weight: 500;\n\t\tcolor: #3f3f46;\n\t}\n\t/* \n/////////////////////////////////////////////////////////////////////////////////\n*/\n\n\t@media screen and (max-width: 600px) {\n\t\tpadding: 30px;\n\t\t.match-row {\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t}\n\t\t.match-name {\n\t\t\ttext-align: center !important;\n\t\t\twidth: 100%;\n\t\t}\n\t\t.sub-row {\n\t\t\tdisplay: grid;\n\t\t\tgrid-template-columns: 1fr 1fr 1fr;\n\t\t\tgrid-gap: 10px;\n\t\t\tmargin: 20px 0;\n\t\t}\n\t}\n",
						]))
				),
				ye = function () {
					var t = Object(x.f)();
					return s.a.createElement(
						s.a.Fragment,
						null,
						s.a.createElement(
							we,
							null,
							s.a.createElement(
								"span",
								{
									className: "back",
									onClick: function (n) {
										n.preventDefault(), t.goBack();
									},
								},
								"Back"
							),
							s.a.createElement(
								"div",
								{ className: "main-div" },
								s.a.createElement(
									"div",
									{ className: "left-div" },
									s.a.createElement(
										"div",
										{ className: "match-row" },
										s.a.createElement(
											"h1",
											{ className: "match-name" },
											"A Really Long Title Match Name"
										),
										s.a.createElement(
											"span",
											null,
											s.a.createElement(
												"span",
												{ className: "sub-title" },
												"Game:"
											),
											"Valorant"
										),
										s.a.createElement(
											"span",
											null,
											s.a.createElement(
												"span",
												{ className: "sub-title" },
												"Date:"
											),
											"07.01.222"
										),
										s.a.createElement(
											"span",
											null,
											s.a.createElement(
												"span",
												{ className: "sub-title" },
												"Loot:"
											),
											"3,000 pogs"
										)
									),
									s.a.createElement(
										"div",
										{ className: "sub-row" },
										s.a.createElement("button", { className: "red" }, "joined"),
										s.a.createElement("span", { className: "edit" }, "Edit")
									),
									s.a.createElement("div", { className: "hero" }),
									s.a.createElement(
										"p",
										null,
										'The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim. Quick zephyrs blow, vexing daft Jim. Sex-charged fop blew my junk TV quiz. How quickly daft jumping zebras vex. Two driven jocks help fax my big quiz. Quick, Baz, get my woven flax jodhpurs! "Now fax quiz Jack!" my brave ghost pled. Five quacking zephyrs jolt my wax bed. Flummoxed by job, kvetching W. zaps Iraq. Cozy sphinx waves quart jug of bad milk. A very bad quack might jinx zippy fowls. Few quips galvanized the mock jury box. Quick brown dogs jump over the lazy fox. The jay, pig, fox, zebra, and my wolves quack! Blowzy red vixens fight for a quick jump. Joaquin Phoenix was gazed by MTV for luck. A wizard\u2019s job is to vex chumps quickly in fog. Watch "Jeopardy!", Alex Trebek"s fun TV quiz game.'
									)
								),
								s.a.createElement(
									"div",
									{ className: "right-div" },
									s.a.createElement(
										"h1",
										{ className: "right-header" },
										"Registered Players"
									),
									[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(function (t) {
										return s.a.createElement(
											"div",
											{ className: "user-container" },
											s.a.createElement(
												"span",
												{ className: "user" },
												s.a.createElement("img", {
													src: B.a,
													alt: "",
													className: "player-profile",
												}),
												s.a.createElement(
													"span",
													{ className: "user-name" },
													"Username"
												)
											),
											1 == t &&
												s.a.createElement(
													"span",
													{
														style: {
															color: "#DD524C",
															font: "normal normal medium 13px/24px Poppins",
														},
													},
													"Host"
												)
										);
									})
								)
							)
						)
					);
				},
				ke = function () {
					return s.a.createElement(
						x.c,
						null,
						s.a.createElement(v, {
							exact: !0,
							path: "/",
							component: It,
							layout: kn,
						}),
						s.a.createElement(v, {
							exact: !0,
							path: "/sign-up",
							component: Ee,
							layout: P,
						}),
						s.a.createElement(v, {
							exact: !0,
							path: "/sign-in",
							component: de,
							layout: P,
						}),
						s.a.createElement(v, {
							exact: !0,
							path: "/setting",
							component: Zt,
							layout: kn,
						}),
						s.a.createElement(v, {
							exact: !0,
							path: "/currency-store",
							component: _n,
							layout: kn,
						}),
						s.a.createElement(v, {
							exact: !0,
							path: "/match",
							component: ye,
							layout: kn,
						})
					);
				};
			var Ne = function () {
				return s.a.createElement(
					g.a,
					null,
					s.a.createElement(
						"div",
						{ className: "App" },
						s.a.createElement(ke, null)
					)
				);
			};
			e(111), e(112);
			f.a.render(
				s.a.createElement(s.a.StrictMode, null, s.a.createElement(Ne, null)),
				document.getElementById("root")
			);
		},
		33: function (t, n) {
			t.exports =
				"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABHNCSVQICAgIfAhkiAAABRlJREFUOE91lVlMVFcYx/93NmdjNpYOIkgZwAGBudCBqjUw2oqKbYOp7YPVVtOmjTVtNGlMkzZlbB8afeny4Iup1prYNGmiplISjYJitRSByyrDwAyzMMyF2fftzvSK0dpGv+S8nC/nd77v5P/9D4FnRGlRfme+lKur0xQbCA6X9AYi4AsEVDSZ6aN9fmp8lr78tKPE/zc3kVWkxxc5y8tlSKlYiKq1JZDwGORyGbhDSYDDQTiehD8YpdIgDk6ZF6gnGf8B6lsqjRE63KWUiGBoqkB93XqQTS2I+pZhnriHK/0jMLtDIFhoJpdjLyHAEIxxbNp1/BH0MbCossioYrJd0WgWVcVyvPt6KzZtew2y/NVgElFEvU7c6rmIH6/8BU8sA6lUBCHbQSAYAcHnHJ00LX73ALoCJA3NZL5CMEKPzYL2RnB4707s27+PhZWw1fDBpGIry2+lcOanc7hzfxHBBANVgQKBUAKpVBIKtaxxcHCeWgF+e+EcNXL9d92t7mvgEHycPvkpitZoEA7FIORlocovQDoegWliGKb7E5i22jDv8mMpkkEkmUOGYSCVCahJE91IbDRs7Gzc0HzRMT6IoT/HoKsuw9effYBIOAa72QReKgRtUzNCfg+G7v4NT4qtOB1HIpsE7Qvi3mwQiSQDoYhAOVm+m9jzzl5j0Et3cUMuOC0uvLVrCzq2tKD/zggGp2xo1ZZgc/sr8LqdcFrtuG1axrzFjHVaNcQSAfoGTJhbjEAh5UO5RnmcEEkkfWRjbVuxOI0E7cLObe3YvmM7JqlhuK1zWN9Qh4qWrYj5aQQWLQh5fIgFl5ER8DHqWMKsxYaBMSdUMgHyC/JuEmRLc2DP22/KnUPXkVowo6S8AYc/OYIsckgFPeBJlRCI8xAL0PDaJiAvLAOyaThsMxg0W2GzWeFwesFkgXWVhQGiVt8QaH+1Vc445sDz2mBZ4uL7b76ApKAMuWwGmWQY8VAAHnoBMa8DpdomZFNx2Oan0T8+gxSTZnNueIIZVJaqgkR5ubqv/Y2tbaKAD2pOGNduz8F47BCer65lJcMFhydE2G3F/MQAhFIZ1BU1rCYXYHc5MGByIpbJQs62Oz5lRzQcvUnUtlQbG6qKu4q4BLRrC2EeolD7wma0biDB5a8CeHJ45hzwWCyIstJRlIiBdBDL0SSW0lyEwyEIREIMj1ngsNPHCcPL9Z26iuKLgnQKmioNCN88PGEeOtoNEApFMPUOY+gqhUQuC/eyD6U1Sqwn1XCGUuApVRCJV4HJAddvT8A0R+9eEfZXH7ZRsVhKp6lrRB4nhpGhSWhr6qHX1SDLindheBp+fwCMAJAogZl5OybdcdTUrEFhoQoSuQJj087RE6f/IB9OypEOcoH2jmhJEurnClnJjKK3fwIf79+F6joSfKEcTDKOiH8Ro3f7cObyAFIEgW0bK1FUvBoKpQwpjqTx4LFTD0fvQRxorzPW6xu6tDVaJOMx/HDqVzQos9i5YzNkikIkohG4nXZ091KY8SahZIWsKZGCL8oDqa87+t6Xv/xrDo+gxo86jBs2vdglzFPh/M+/Ydk0xbqOHuI8GeLhIDzuJdwYXYSiQIoQ6zIKCRcub/roJYpegT12mycNsvuskVSVan662dOtu3HlKtr1a9Gk17GmAbjYt+ufdqFMLUEwEBnNE3MPfH5h6tkG+yT4/IlDnb09PaQ4kzC0vdRAllVqYTFbKHso0Zcv41Dvn7x66WlfwD9E8VWlvZPzZQAAAABJRU5ErkJggg==";
		},
		45: function (t, n) {
			t.exports =
				"data:image/png;base64,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";
		},
		49: function (t, n, e) {
			t.exports = e.p + "static/media/background.d4c03931.png";
		},
		77: function (t, n, e) {
			t.exports = e.p + "static/media/hero2.f54dc536.png";
		},
		78: function (t, n, e) {
			t.exports = e.p + "static/media/hero3.7b1c9a7b.png";
		},
		79: function (t, n, e) {
			t.exports = e.p + "static/media/hero4.16f18b3d.png";
		},
		80: function (t, n, e) {
			t.exports = e.p + "static/media/hero1.060f9883.png";
		},
		81: function (t, n, e) {
			t.exports = e.p + "static/media/avatar2.daa45a8f.png";
		},
		83: function (t, n) {
			t.exports =
				"data:image/png;base64,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";
		},
		84: function (t, n) {
			t.exports =
				"data:image/png;base64,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";
		},
		85: function (t, n, e) {
			t.exports = e.p + "static/media/pay.99e64fa4.png";
		},
		94: function (t, n, e) {
			t.exports = e(113);
		},
		99: function (t, n, e) {},
	},
	[[94, 1, 2]],
]);
//# sourceMappingURL=main.aa64bb38.chunk.js.map