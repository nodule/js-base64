module.exports = {
  name: "encode",
  ns: "js-base64",
  description: "Base64 encode",
  async: true,
  phrases: {
    active: "Encoding to base64"
  },
  ports: {
    input: {
      "in": {
        type: "string",
        title: "String",
        description: "The string to be encoded.",
        async: true,
        fn: function __IN__(data, source, state, input, $, output, js_base64) {
          var r = function() {
            output({
              out: $.write('in', js_base64.encode($.in))
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