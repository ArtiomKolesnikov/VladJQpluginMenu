<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <script src="jquery-3.1.0.js" type="text/javascript"></script>
</head>
<body>
<header>
    <nav class="pop-up"></nav>
</header>
<main id="main">

</main>
<script src="jquery.My-pop-up.js" type="text/javascript"></script>
<script type="text/javascript">
    $('.pop-up').myPop_up({

        menuItems: {
            Main: AddItem("Home", "index.html"),
            Products: AddItem("Products", "products.php", {
                MSI: AddItem("MSI", "products.php?msi"),
                Asus: AddItem("Asus", "products.php?asus"),
                Dell: AddItem("Dell", "products.php?dell"),
                Mac: AddItem("Mac", "products.php?mac"),
            }),
            Contacts: AddItem("Contacts", "contacts.php", {
                Addr: AddItem("Address", "contacts.php?info=address"),
                Mail: AddItem("E-mail", "contacts.php?info=email"),
                Phone: AddItem("Phone", "contacts.php?info=phone"),
            })
        },
        ColorBackground: "#CD8D9C",
        ColorHover: "#7B79CD",
        ColorText: "black"
    });
</script>
</body>
</html>