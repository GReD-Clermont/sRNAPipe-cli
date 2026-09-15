use strict;
use warnings;

use File::Temp qw( tempdir tempfile );
use FindBin;
use Test::More;

use lib "$FindBin::Bin/../lib";
use sRNAPipe::html qw( copy_css copy_js );

my $dir = tempdir( CLEANUP => 1 );
mkdir "$dir/css";
mkdir "$dir/js";

copy_css($dir);
copy_js($dir);

ok( -f "$dir/css/report.css", 'copies the replacement report stylesheet' );
ok( -f "$dir/js/report.js", 'copies the replacement report script' );
ok( !-f "$dir/css/bootstrap.css", 'does not copy removed bootstrap stylesheet' );
ok( !-f "$dir/js/bootstrap.min.js", 'does not copy removed bootstrap script' );

my ( $fh, $path ) = tempfile();
sRNAPipe::html::header($fh);
sRNAPipe::html::footer($fh);
close $fh;

open my $html, '<', $path or die "cannot open $path: $!";
my $content = do { local $/; <$html> };
close $html;

like( $content, qr{css/report\.css}, 'generated HTML references report.css' );
like( $content, qr{js/report\.js}, 'generated HTML references report.js' );
unlike( $content, qr{css/bootstrap(?:-responsive|-table)?\.css}, 'generated HTML omits removed bootstrap stylesheets' );
unlike( $content, qr{js/bootstrap(?:-table|\.min)?\.js}, 'generated HTML omits removed bootstrap scripts' );

done_testing();
