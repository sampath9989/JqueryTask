$("document").ready(() => {
    $("#loading").removeClass("d-none");
    $.ajax({
        url: "https://randomuser.me/api/",
        dataType: "json",
        async: true,
        success: function (data) {
            let profile = data.results[0];
            $("#headerImage").attr("src", "https://picsum.photos/750/250")
            // We got data
            $("#profileImage").attr("src", profile.picture.large);
            $("#profileName").text(
                profile.name.first + " " + profile.name.last
            );
            $("#profileLocation").text(profile.location.country);
            $("#profileEmail").text(profile.email);
            $("#profilePhone").text(profile.phone);
            $("#profileStreet").text(
                profile.location.street.number +
                    " " +
                    profile.location.street.name
            );
            $("#profileCity").text(profile.location.city);
            $("#profileState").text(profile.location.state);
            $("#profileCountry").text(profile.location.country);
            $("#profilePostCode").text(profile.location.postcode);
            $("#profileUsername").text(profile.login.username);
            $("#profilePassword").text(profile.login.password);
            $("#profileDob").text(new Date(profile.dob.date).toDateString());
            $("#profileAge").text(profile.dob.age);
            $("#profileSSN").text(profile.id.value || "Not available");

            // Hiding loading after loading data
        },
    });
    $("img").on("load", function (event) {
        $("#loading").addClass("d-none");
    });
    
});