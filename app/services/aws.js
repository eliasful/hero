import Service from '@ember/service';
import environment from 'hero/config/environment';
import { inject as service } from '@ember/service';
import { get } from '@ember/object';

export default Service.extend({
  s3: null,
  init() {
    this._super(...arguments);
    
    const albumBucketName = 'hero-api-images';
    const bucketRegion = 'us-east-1';
    const IdentityPoolId = 'us-east-1:91f8f337-0fce-428c-90b8-4ece857cc3f9';
    
    AWS.config.update({
      region: bucketRegion,
      credentials: new AWS.CognitoIdentityCredentials({
        IdentityPoolId: IdentityPoolId
      })
    });
    
    const s3 = new AWS.S3({
      apiVersion: '2006-03-01',
      params: {Bucket: albumBucketName}
    });
    
    this.set('s3', s3);
  },
  uploadImage(file, album = 'media') {
    const albumPhotosKey = encodeURIComponent(album) + '/';
    const fileName = `${get(file, 'name')}-${Date.now()}`;
    const photoKey = albumPhotosKey + fileName;
    
    return new Promise((resolve, reject) => {
      this.get('s3').upload({
        Key: photoKey,
        Body: file,
        ACL: 'public-read'
      }, (err, data) => {
        if (err) { reject(err); }
        
        resolve(data);
      });
    });
  }
});
