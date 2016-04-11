app.directive("makeEditable", function() {
  return {
    restrict: 'A',
    transclude: true,
    templateUrl: '/templates/editable.html',
    link: function(scope, element, attrs) {
      // console.log('Fucking shit:', element);
      scope.editing = true;
      scope.buttonText = "Edit";
      scope.boxClass = "editBox";
      scope.check = function () {
        // console.log("FUCK");
        scope.editing = !scope.editing;
        if (!scope.editing) {
          scope.buttonText = "Save";
          scope.boxClass = "editActive";
        } else {
          scope.buttonText = "Edit";
          scope.boxClass = "editBox";
        }
        console.log(element);
      }
    }
  }
});
