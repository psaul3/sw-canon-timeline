(function () {
    var app = angular.module('swcanon', []);
    
    app.controller('BooksController', ['$http', function ($http) {
       
        var library = this;
        library.books = [];
        
        $http.get('http://localhost:2403/books').success(function (data) {
            library.books = data;
            console.log(library.books);
        });
        
        this.addBook = function (book) {
            library.books.push(this.book);
            
            $http.post('http://localhost:2403/books',this.book).success(function () {
                console.log("Success. Book has been imported.");
            }).error(function (err) {
                console.log(err);
            });
            
            this.book = {};
        };
        
    }]);
    
    app.controller('FilmsController', ['$http', function ($http) {
        var media = this;
        media.films = [];
        
        $http.get('http://localhost:2403/films').success(function (data) {
            media.films = data;
            console.log(media.films);
        });
        
        
    }]);
    
    app.directive('navBar', function () {
       return {
           restrict: 'E',
           templateUrl: 'nav-bar.html',
           controller: function() {
                this.link = 1;
                this.selectLink = function (setLink) {
                    this.link = setLink;  
                };
                this.isSelected = function (checkLink) {
                    return this.link === checkLink;  
                };
           },
           controllerAs: 'nav'
       };
    });
    
    app.directive('formAddbook', function () {
       return {
            restrict: 'E',
            templateUrl: 'form-addBook.html'
       };
    });
    
    
})();