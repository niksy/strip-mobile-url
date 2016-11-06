'use strict';

const assert = require('assert');
const fn = require('../');

const utmPart = '?utm_campaign=RSS-Feedburner-All-Partial&utm_cid=RSS-Feedburner-All-Partial&utm_medium=feed&utm_source=feedly&utm_reader=feedly&z=last&m=middle&a=first&t=upper-middle';
const cleanUtmPart = '?a=first&m=middle&t=upper-middle&z=last';

it('should return clean URLs', function () {

	const mobileUrls = [
		`https://mobile.twitter.com/niksy/status/766611665244782592${utmPart}#foo`,
		`https://m.twitter.com/niksy/status/766611665244782592${utmPart}#foo`,
		`https://touch.twitter.com/niksy/status/766611665244782592${utmPart}#foo`,
		`https://mobile.foo.bar.baz.twitter.com/niksy/status/766611665244782592${utmPart}#foo`,
		`https://foo.bar.baz.twitter.com/niksy/status/766611665244782592${utmPart}#foo`,
		`https://www.mobile.twitter.com/niksy/status/766611665244782592${utmPart}#foo`,
		`https://mobile.www.twitter.com/niksy/status/766611665244782592${utmPart}#foo`,
		`mobile.twitter.com/niksy/status/766611665244782592${utmPart}#foo`,
		`m.twitter.com/niksy/status/766611665244782592${utmPart}#foo`,
		`touch.twitter.com/niksy/status/766611665244782592${utmPart}#foo`,
		`mobile.foo.bar.baz.twitter.com/niksy/status/766611665244782592${utmPart}#foo`,
		`foo.bar.baz.twitter.com/niksy/status/766611665244782592${utmPart}#foo`,
		`www.mobile.twitter.com/niksy/status/766611665244782592${utmPart}#foo`,
		`mobile.www.twitter.com/niksy/status/766611665244782592${utmPart}#foo`,
		`https://mobile.twitter.com/@niksy/status/766611665244782592${utmPart}#foo`,
	];

	const cleanUrls = [
		`https://twitter.com/niksy/status/766611665244782592${cleanUtmPart}#foo`,
		`https://twitter.com/niksy/status/766611665244782592${cleanUtmPart}#foo`,
		`https://twitter.com/niksy/status/766611665244782592${cleanUtmPart}#foo`,
		`https://foo.bar.baz.twitter.com/niksy/status/766611665244782592${cleanUtmPart}#foo`,
		`https://foo.bar.baz.twitter.com/niksy/status/766611665244782592${cleanUtmPart}#foo`,
		`https://www.twitter.com/niksy/status/766611665244782592${cleanUtmPart}#foo`,
		`https://www.twitter.com/niksy/status/766611665244782592${cleanUtmPart}#foo`,
		`http://twitter.com/niksy/status/766611665244782592${cleanUtmPart}#foo`,
		`http://twitter.com/niksy/status/766611665244782592${cleanUtmPart}#foo`,
		`http://twitter.com/niksy/status/766611665244782592${cleanUtmPart}#foo`,
		`http://foo.bar.baz.twitter.com/niksy/status/766611665244782592${cleanUtmPart}#foo`,
		`http://foo.bar.baz.twitter.com/niksy/status/766611665244782592${cleanUtmPart}#foo`,
		`http://www.twitter.com/niksy/status/766611665244782592${cleanUtmPart}#foo`,
		`http://www.twitter.com/niksy/status/766611665244782592${cleanUtmPart}#foo`,
		`https://twitter.com/@niksy/status/766611665244782592${cleanUtmPart}#foo`
	];

	mobileUrls.forEach(( url, i ) => {
		assert.equal(fn(url), cleanUrls[i]);
	});

});
