var app = angular.module("app", []); 

app.controller("myCtrl", function($scope) {
    $scope.people = [
        {name: "Nikolina", surname: "Raguz", yearOfBirth: 1994, phoneNumber: 0997549652, email: "raguz.nikolina@gmail.com", company: { name: "Podravka", city: "Osijek"}},
        {name: "Robert", surname: "Markovic", yearOfBirth: 1992, phoneNumber: 0997864702, email: "markovic.robert@gmail.com", company: { name: "Energoinvest", city: "Osijek"}},
        {name: "Marina", surname: "Kladusa", yearOfBirth: 1989, phoneNumber: 0997401648, email: "kladusa.marina@gmail.com", company: { name: "Hrvatski Telekom", city: "Osijek"}},
        {name: "Ivan", surname: "Pejakovic", yearOfBirth: 1995, phoneNumber: 099764057, email: "pejakovic.ivan@gmail.com", company: { name: "Vupik", city: "Vukovar"}},
        {name: "Anja", surname: "Ivic", yearOfBirth: 1991, phoneNumber: 09974138120, email: "ivic.anja@gmail.com", company: { name: "Elektromodul", city: "Osijek"}},
        {name: "Nikola", surname: "Kolaric", yearOfBirth: 1990, phoneNumber: 0991053421, email: "kolaric.nikola@gmail.com", company: { name: "Adriatico", city: "Osijek"}},
        {name: "Franjo", surname: "Pivaric", yearOfBirth: 1991, phoneNumber: 0990173485, email: "pivaric.franjo@gmail.com", company: { name: "Matic", city: "Zupanja"}},
        {name: "Bruno", surname: "Perisic", yearOfBirth: 1989, phoneNumber: 0999721531, email: "perisic.bruno@gmail.com", company: { name: "Energos", city: "Osijek"}},
        {name: "Sara", surname: "Kampic", yearOfBirth: 1988, phoneNumber: 0993017542, email: "kampic.sara@gmail.com", company: { name: "KingICT", city: "Zagreb"}},
        {name: "Martina", surname: "Matic", yearOfBirth: 1992, phoneNumber: 0990671528, email: "matic.martina@gmail.com", company: { name: "Saponia", city: "Osijek"}},
        {name: "Ivo", surname: "Ivicic", yearOfBirth: 1995, phoneNumber: 0993715483, email: "ivicic.ivo@gmail.com", company: { name: "Komunalac", city: "Vukovar"}}, 
    ];
});