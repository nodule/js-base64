module.exports = {
  name: "decode",
  ns: "js-base64",
  description: "Base64 decode",
  async: true,
  phrases: {
    active: "Decoding base64"
  },
  ports: {
    input: {
      "in": {
        type: "string",
        title: "String",
        description: "The string to be decoded.",
        async: true,
        fn: function __IN__(data, x, source, state, input, output, js_base64) {
          var r = function() {
            output({
              out: $.write('in', js_base64.decode($.in))
            });
          }.call(this);
          return {
            state: state,
            return: r
          };
        }
      }
    },
    output: {
      out: {
        title: "Output",
        type: "string"
      }
    }
  },
  dependencies: {
    npm: {
      "js-base64": require('js-base64')
    }
  },
  state: {}
}