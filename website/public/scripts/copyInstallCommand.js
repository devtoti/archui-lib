function copyInstallCommand(event) {
  if (event) {
    event.preventDefault();
    event.stopPropagation();
  }

  const installCommandEl = document.getElementById('install-command');
  if (!installCommandEl) return false;

  const installCommand = installCommandEl.textContent?.trim() || 
                        installCommandEl.innerText?.trim() || 
                        'npm install @devtoti/archui-react';
  
  if (!installCommand) return false;

  function showSuccess() {
    const copyButton = document.getElementById('copy-install-btn');
    if (!copyButton) return;

    const originalHTML = copyButton.innerHTML;
    copyButton.innerHTML = '<svg class="w-4 h-4 inline-block align-middle" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>';
    copyButton.style.color = '#2855AD';
    
    setTimeout(() => {
      copyButton.innerHTML = originalHTML;
      copyButton.style.color = '';
    }, 2000);
  }

  function fallbackCopy() {
    const textArea = document.createElement('textarea');
    textArea.value = installCommand;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    showSuccess();
  }

  if (navigator.clipboard?.writeText) {
    navigator.clipboard.writeText(installCommand)
      .then(showSuccess)
      .catch(fallbackCopy);
  } else {
    fallbackCopy();
  }

  return false;
}

function initCopyButton() {
  const copyButton = document.getElementById('copy-install-btn');
  if (copyButton) {
    const newButton = copyButton.cloneNode(true);
    if (copyButton.parentNode) {
      copyButton.parentNode.replaceChild(newButton, copyButton);
    }
    newButton.addEventListener('click', copyInstallCommand);
    return true;
  }
  return false;
}

function tryInit() {
  if (!initCopyButton()) {
    setTimeout(tryInit, 100);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => setTimeout(tryInit, 100));
} else {
  setTimeout(tryInit, 100);
}

window.addEventListener('load', () => setTimeout(tryInit, 100));

