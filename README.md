sRNAPipe-cli
============

sRNAPipe version 1.1



Requirements:
-------------

* Perl modules: 
  * Statistics
  * Parallel::ForkManager
  * Statistics::R
  * Getopt::Long
  * String::Random
  * File::Copy::Recursive
  * Math::CDF
* BWA aligner, version 0.7.12 or higher
* BedTools, version 2.24.0 or higher
* Samtools, version 1.5
* R, version 3.1 or higher
* R packages:
  * plotrix
  * bioconductor-sushi
  * RColorBrewer
  * ggplot2



Install:
--------

Run:
```
perl Makefile.pl
make install
```



Usage:
------

```
srnapipe --fastq <fastq file 1> --fastq_n <name 1> [--fastq <fastq file 2> --fastq_n <name 2> --fastq <fastq file 3> -- fastq_n <name 3> ...] --ref <reference genome> [--build_index] --transcripts <transcripts> [--build_transcripts] --TE <transposable elements> [--build_TE] --miRNAs <miRNAs> [--build_miRNAs] --snRNAs <snRNAs> [--build_snRNAs] --rRNAs <rRNAs> [--build_rRNAs] --tRNAs <tRNAs> [--buid_tRNAs] --dir <results directory> --html <results.html> [options]
```



Arguments:
----------

| Argument                      | Description                                     |
|-------------------------------|-------------------------------------------------|
| --fastq <fastq file>          | Fastq file to process                           |
| --fastq_n <name>              | Name of the content to process                  |
| --ref <reference>             | Fasta file containing the reference genome      |
| --transcripts <transcripts>   | Fasta file containing the transcripts           |
| --TE <TE>                     | Fasta file containing the transposable elements |
| --miRNAs <miRNAs>             | Fasta file containing the miRNAs                |
| --snRNAs <snRNAs>             | Fasta file containing the snRNAs                |
| --rRNAs <rRNAs>               | Fasta file containing the rRNAs                 |
| --tRNAs <tRNAS>               | Fasta file containing the tRNAs                 |
| --html                        | Main HTML file where results will be displayed  |
| --dir                         | Folder where results will be stored             |


*For any fasta file, if a bwa index is not provided, you should build it through the corresponding '--build_[element]' argument*




Options:
--------

| Option                    | Description                               |
|---------------------------|-------------------------------------------|
| --min \<INT\>             | Minimum read size (default: 18)           |
| --max \<INT\>             | Maximum read size (default: 29)           |
| --si_min \<INT\>          | Lower bound of siRNA range (default: 21)  |
| --si_max \<INT\>          | Higher bound of siRNA range (default: 21) |
| --pi_min \<INT\>          | Lower bound of piRNA range (default: 23)  |
| --pi_max \<INT\>          | Higher bound of piRNA range (default: 29) |
| --mis \<INT\>             | Maximal genome mismatches (default: 0)    |
| --misTE \<INT\>           | Maximal TE mismatches (default: 3)        |
| --PPPon \<true\|false\>   | Ping-pong partners (default: true)        |
