import  angular                 from  "angular"; 
import  route                   from  'angular-ui-router';
import  Animate                 from  'angular-animate';
import  angularMarterial        from  'angular-material';
import  sangularSanitize        from  'angular-sanitize';

import appModule from "./app";

angular.element(document).ready(function() {  
  angular.bootstrap(document, [appModule.name], { strictDi: false });
});