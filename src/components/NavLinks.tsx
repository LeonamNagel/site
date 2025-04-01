interface NavLinksProps {
  className?: string;
  itemClassName?: string;
  showName?: boolean;
}

export function NavLinks({ className = "", itemClassName = "", showName = true }: NavLinksProps) {
  return (
    <div className={className}>
      {showName && (
        <span className="text-xl font-bold gradient-text mr-8">
          Leonam Nagel
        </span>
      )}
      <a href="#home" className={itemClassName}>
        Início
      </a>
      <a
        href="https://www.youtube.com/playlist?list=PLAPOY1myiC7AD4xUlIQITx9jRBQn1xyXs"
        target="_blank"
        rel="noopener noreferrer"
        className={itemClassName}
      >
        Curso: IA Generativa na Prática (Free)
      </a>
      <a href="#contact" className={itemClassName}>
        Contato
      </a>
    </div>
  );
}