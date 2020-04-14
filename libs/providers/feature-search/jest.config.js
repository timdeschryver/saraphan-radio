module.exports = {
  name: 'providers-feature-search',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/providers/feature-search',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
