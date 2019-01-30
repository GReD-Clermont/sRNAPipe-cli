use strict;
use warnings;
 
use 5.008;
 
use ExtUtils::MakeMaker;
WriteMakefile
(
    NAME          => 'sRNAPipe',
    AUTHOR        => 'Romain Pogorelcnik <admin@gred-clermont.fr>',
    VERSION_FROM  => 'lib/sRNAPipe.pm',
    ABSTRACT_FROM => 'lib/sRNAPipe.pm',
    LICENSE       => 'open_source',
    PREREQ_PM     => {
	  'File::Basename' 		=> '0',
          'Getopt::Long'		=> '2.50',
          'Parallel::ForkManager'	=> '1.17',
	  'Statistics::R'		=> '0.34',
          'String::Random'		=> '0',
	  'File::Copy::Recursive'	=> '0.38',
	  'Math::CDF'			=> '0.1',
    },
    EXE_FILES => [
           'script/srnapipe'
    ],
    META_MERGE    => {
        'meta-spec' => { version => 2 },
         resources => {
             repository => {
                 type => 'git',
                 url  => 'https://github.com/GReD-Clermont/sRNAPipe-cli',
                 web  => 'https://github.com/GReD-Clermont/sRNAPipe-cli',
             },
             bugtracker => {web => 'https://github.com/GReD-Clermont/sRNAPipe-cli/issues'},
         },
    },
);
     
