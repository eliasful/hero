export default function sweetErrors(sweetAlert, message, e) {
  let errors = '';
  e.errors.forEach(error => {
    let split = error.source.pointer.split('/');
    let field = split[split.length - 1];
    let message = error.detail;
    errors += `${field}: ${message}<br>`;
  });
  sweetAlert('Ops!', message + '<br>' + errors, 'warning');
}
