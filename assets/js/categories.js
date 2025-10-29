const categories = { jekyll: [{ url: `/posts/jekyll-markdown/`, date: `07 Oct 2025`, title: `Jekyll Markdown`},],Test_Post: [{ url: `/posts/jekyll-markdown/`, date: `07 Oct 2025`, title: `Jekyll Markdown`},],first_post: [{ url: `/posts/jekyll-markdown/`, date: `07 Oct 2025`, title: `Jekyll Markdown`},],Redes: [{ url: `/posts/instalacion-gns3/`, date: `08 Oct 2025`, title: `Instalación GNS3 bajo Debian 12`},],GNS3: [{ url: `/posts/instalacion-gns3/`, date: `08 Oct 2025`, title: `Instalación GNS3 bajo Debian 12`},],1ºASIR: [{ url: `/posts/instalacion-gns3/`, date: `08 Oct 2025`, title: `Instalación GNS3 bajo Debian 12`},],Bases_de_Datos: [{ url: `/posts/instlacion-mongo/`, date: `08 Oct 2025`, title: `Instalación MongoDB (Debian 13)`},],mongodb: [{ url: `/posts/instlacion-mongo/`, date: `08 Oct 2025`, title: `Instalación MongoDB (Debian 13)`},],2ºASIR: [{ url: `/posts/sql-developer-instalacion/`, date: `29 Oct 2025`, title: `Instalación SQL Developer y conexión TNS`},{ url: `/posts/Creaci%C3%B3n-plantilla-y-clonaci%C3%B3n-enlazada/`, date: `12 Oct 2025`, title: `Plantilla y clonación enlazada KVM/QEMU + libvirt`},{ url: `/posts/instlacion-mongo/`, date: `08 Oct 2025`, title: `Instalación MongoDB (Debian 13)`},],IaC: [{ url: `/posts/Creaci%C3%B3n-plantilla-y-clonaci%C3%B3n-enlazada/`, date: `12 Oct 2025`, title: `Plantilla y clonación enlazada KVM/QEMU + libvirt`},],Virt-Manager: [{ url: `/posts/Creaci%C3%B3n-plantilla-y-clonaci%C3%B3n-enlazada/`, date: `12 Oct 2025`, title: `Plantilla y clonación enlazada KVM/QEMU + libvirt`},],KVM: [{ url: `/posts/Creaci%C3%B3n-plantilla-y-clonaci%C3%B3n-enlazada/`, date: `12 Oct 2025`, title: `Plantilla y clonación enlazada KVM/QEMU + libvirt`},],QEMU: [{ url: `/posts/Creaci%C3%B3n-plantilla-y-clonaci%C3%B3n-enlazada/`, date: `12 Oct 2025`, title: `Plantilla y clonación enlazada KVM/QEMU + libvirt`},],Base_de_datos: [{ url: `/posts/sql-developer-instalacion/`, date: `29 Oct 2025`, title: `Instalación SQL Developer y conexión TNS`},],Oracle: [{ url: `/posts/sql-developer-instalacion/`, date: `29 Oct 2025`, title: `Instalación SQL Developer y conexión TNS`},], }

console.log(categories)

window.onload = function () {
  document.querySelectorAll(".category").forEach((category) => {
    category.addEventListener("click", function (e) {
      const posts = categories[e.target.innerText.replace(" ","_")];
      let html = ``
      posts.forEach(post=>{
        html += `
        <a class="modal-article" href="${post.url}">
          <h4>${post.title}</h4>
          <small class="modal-article-date">${post.date}</small>
        </a>
        `
      })
      document.querySelector("#category-modal-title").innerText = e.target.innerText;
      document.querySelector("#category-modal-content").innerHTML = html;
      document.querySelector("#category-modal-bg").classList.toggle("open");
      document.querySelector("#category-modal").classList.toggle("open");
    });
  });

  document.querySelector("#category-modal-bg").addEventListener("click", function(){
    document.querySelector("#category-modal-title").innerText = "";
    document.querySelector("#category-modal-content").innerHTML = "";
    document.querySelector("#category-modal-bg").classList.toggle("open");
    document.querySelector("#category-modal").classList.toggle("open");
  })
};