import { Transform } from 'stream'

/**
 * Returns a stream that compiles Vinyl files as HTML
 */
declare function GulpFormatHtml (options: GulpFormatHtml.Options): Transform

declare namespace GulpFormatHtml {
  interface Options {
    /**
     * Display name of file from stream that is being formatting
     */
    verbose: boolean;
  }
}

export = GulpFormatHtml
