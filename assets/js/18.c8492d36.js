(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{380:function(t,e,a){"use strict";a.r(e);var s=a(18),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"dokodemo-door"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dokodemo-door"}},[t._v("#")]),t._v(" Dokodemo-door")]),t._v(" "),a("ul",[a("li",[t._v("名称："),a("code",[t._v("dokodemo-door")])]),t._v(" "),a("li",[t._v("类型：入站协议")])]),t._v(" "),a("p",[t._v("Dokodemo door（任意门）是一个入站数据协议，它可以监听一个本地端口，并把所有进入此端口的数据发送至指定服务器的一个端口，从而达到端口映射的效果。")]),t._v(" "),a("h2",{attrs:{id:"inboundconfigurationobject"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#inboundconfigurationobject"}},[t._v("#")]),t._v(" InboundConfigurationObject")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"address"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"8.8.8.8"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"port"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("53")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"network"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tcp"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"timeout"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"followRedirect"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"userLevel"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("blockquote",[a("p",[a("code",[t._v("address")]),t._v(": address")])]),t._v(" "),a("p",[t._v("将流量转发到此地址。可以是一个 IP 地址，形如 "),a("code",[t._v('"1.2.3.4"')]),t._v("，或者一个域名，形如 "),a("code",[t._v('"v2ray.com"')]),t._v("。字符串类型。")]),t._v(" "),a("p",[t._v("当 "),a("code",[t._v("followRedirect")]),t._v("（见下文）为 "),a("code",[t._v("true")]),t._v(" 时，"),a("code",[t._v("address")]),t._v(" 可为空。")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("port")]),t._v(": number")])]),t._v(" "),a("p",[t._v("将流量转发到目标地址的指定端口，范围 [1, 65535]，数值类型。必填参数。")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("network")]),t._v(': "tcp" | "udp" | "tcp,udp"')])]),t._v(" "),a("p",[t._v("可接收的网络协议类型。比如当指定为 "),a("code",[t._v('"tcp"')]),t._v(" 时，任意门仅会接收 TCP 流量。默认值为 "),a("code",[t._v('"tcp"')]),t._v("。")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("timeout")]),t._v(": number")])]),t._v(" "),a("p",[t._v("入站数据的时间限制（秒），默认值为 300。")]),t._v(" "),a("p",[t._v("V2Ray 3.1 后等价于对应用户等级的 "),a("code",[t._v("connIdle")]),t._v(" 策略")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("followRedirect")]),t._v(": true | false")])]),t._v(" "),a("p",[t._v("当值为 "),a("code",[t._v("true")]),t._v(" 时，dokodemo-door 会识别出由 iptables 转发而来的数据，并转发到相应的目标地址。详见 "),a("RouterLink",{attrs:{to:"/config/transport.html"}},[t._v("传输配置")]),t._v(" 中的 "),a("code",[t._v("tproxy")]),t._v(" 设置。")],1),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("userLevel")]),t._v(": number")])]),t._v(" "),a("p",[t._v("用户等级，所有连接都会使用这个用户等级。")]),t._v(" "),a("h2",{attrs:{id:"透明代理配置样例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#透明代理配置样例"}},[t._v("#")]),t._v(" 透明代理配置样例")]),t._v(" "),a("p",[t._v("V2Ray 中增加一个 dokodemo-door 的入站协议：")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"network"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tcp,udp"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"timeout"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"followRedirect"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("配置 iptables：")]),t._v(" "),a("div",{staticClass:"language-plain extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("# Create new chain\niptables -t nat -N V2RAY\niptables -t mangle -N V2RAY\niptables -t mangle -N V2RAY_MARK\n\n# Ignore your V2Ray server's addresses\n# It's very IMPORTANT, just be careful.\niptables -t nat -A V2RAY -d 123.123.123.123 -j RETURN\n\n# Ignore LANs and any other addresses you'd like to bypass the proxy\n# See Wikipedia and RFC5735 for full list of reserved networks.\niptables -t nat -A V2RAY -d 0.0.0.0/8 -j RETURN\niptables -t nat -A V2RAY -d 10.0.0.0/8 -j RETURN\niptables -t nat -A V2RAY -d 127.0.0.0/8 -j RETURN\niptables -t nat -A V2RAY -d 169.254.0.0/16 -j RETURN\niptables -t nat -A V2RAY -d 172.16.0.0/12 -j RETURN\niptables -t nat -A V2RAY -d 192.168.0.0/16 -j RETURN\niptables -t nat -A V2RAY -d 224.0.0.0/4 -j RETURN\niptables -t nat -A V2RAY -d 240.0.0.0/4 -j RETURN\n\n# Anything else should be redirected to Dokodemo-door's local port\niptables -t nat -A V2RAY -p tcp -j REDIRECT --to-ports 12345\n\n# Add any UDP rules\nip route add local default dev lo table 100\nip rule add fwmark 1 lookup 100\niptables -t mangle -A V2RAY -p udp --dport 53 -j TPROXY --on-port 12345 --tproxy-mark 0x01/0x01\niptables -t mangle -A V2RAY_MARK -p udp --dport 53 -j MARK --set-mark 1\n\n# Apply the rules\niptables -t nat -A OUTPUT -p tcp -j V2RAY\niptables -t mangle -A PREROUTING -j V2RAY\niptables -t mangle -A OUTPUT -j V2RAY_MARK\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);