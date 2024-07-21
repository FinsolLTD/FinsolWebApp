function fnSubmit(enquiryType) {
	var webServiceUrl = "https://berguna.in:442/api/Init/";
	var url = "SendEnquiryEmail";

	var name = document.getElementById("name").value;
	var location = document.getElementById("location").value;
	var mobile = document.getElementById("mobile").value;
	var email = document.getElementById("email").value;
	var applyFor = document.getElementById("applyFor").value;
	var message = document.getElementById("message").value;

	var enquiryObj = {
		TenantCode: "FINS",
		EnquiryType: enquiryType,
		UserName: name,
		Location: location,
		Mobile: mobile,
		Email: email,
		ApplyFor: applyFor,
		Message: message
	};

	var jqxhr = $.ajax({
		type: "POST",
		url: webServiceUrl + url,
		data: JSON.stringify(enquiryObj),
		contentType: "application/json; charset=utf-8",
		traditional: true,
		dataType: "json",
		success: function (response) {
			document.getElementById('name').value = "";
			document.getElementById('location').value = "";
			document.getElementById('mobile').value = "";
			document.getElementById('email').value = "";
			document.getElementById('message').value = "";
		},
		error: function (response, status, error) {

		}
	});
}