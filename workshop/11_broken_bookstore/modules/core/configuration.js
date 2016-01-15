export default function configuration($logProvider){
  $logProvider.debugEnabled(false);
}

configuration.$inject = ['$logProvider'];

