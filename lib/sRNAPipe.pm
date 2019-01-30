package sRNAPipe;

our $VERSION = '1.1';

=head1 NAME

sRNAPipe - Pipeline for bioinformatic in-depth exploration of small RNA-seq data

=head1 DESCRIPTION

The field of small RNA is one of the most investigated research areas since they were shown to regulate gene expression and play essential roles in fundamental biological processes. sRNAPipe a computational pipeline (sRNAPipe: small RNA pipeline) based on the Galaxy framework that takes as input a fastq file of small RNA-seq reads and performs successive steps of mapping to categories of genomic sequences: microRNAs, gene transcripts, small nuclear RNAs, ribosomal RNAs, transfer RNAs and transposable elements. It also provides individual mapping and counting for chromosomes, gene transcripts and transposable elements, normalization, small RNA length analysis and plotting of the data along genomic coordinates to build publication-quality graphs and figures. sRNAPipe evaluates 10-nucleotide 5’-overlaps of reads on opposite strands to test ping-pong amplification for putative PIWI-interacting RNAs, providing numbers of overlaps and corresponding z-scores.

=cut

1;
