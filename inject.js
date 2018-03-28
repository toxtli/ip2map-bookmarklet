var a = document.createElement("a");
a.href = "https://www.ip2map.com";
a.text = "LINK";
(top.document.getElementsByTagName("body")[0] || top.document.body).insertAdjacentElement('afterbegin', a);
alert("Added");
