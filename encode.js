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
        fn: function __IN__(data, x, source, state, input, output, js_base64) {
          var r = function() {
            output({
              out: js_base64.encode(data)
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