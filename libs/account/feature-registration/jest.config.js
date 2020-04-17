module.exports = {
  name: 'account-feature-registration',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/account/feature-registration',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
