import  angular                 from  "angular"; 
import  route                   from  'angular-ui-router';
import  Animate                 from  'angular-animate';
import  sangularSanitize        from  'angular-sanitize';

import  mainModule from './main';

angular.element(document).ready(function() {
  angular.bootstrap(document, [mainModule.name], { strictDi: true });
});