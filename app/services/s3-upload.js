import Service from '@ember/service';

export default Service.extend({
  async uploadFile(file, signedRequest) {
    console.log(file, signedRequest);
    return new Promise(function(resolve, reject) {
      const xhr = new XMLHttpRequest()
      xhr.open("PUT", signedRequest)
      xhr.setRequestHeader('x-amz-acl', 'public-read')
      xhr.onload = () => { resolve() }
      xhr.send(file)
    })
  }
});
