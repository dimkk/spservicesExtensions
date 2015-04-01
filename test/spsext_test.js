(function ($) {
  module('jQuery.spsext');

  test('is spsext', function () {
    expect(2);
    strictEqual($.spsext(), 'spsext.', 'should be spsext');
    strictEqual($.spsext({punctuation: '!'}), 'spsext!', 'should be thoroughly spsext');
  });
  
}(jQuery));
