from sqlalchemy import Column, Integer, String, Boolean, create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

Base = declarative_base()

# Criando a tabela 'tasks' com suas colunas correspondentes
class Task(Base):
    __tablename__ = 'tasks'
    id = Column(Integer, primary_key=True)
    title = Column(String, nullable=False)
    completed = Column(Boolean, default=False)

engine = create_engine('sqlite:///database.db')
Base.metadata.create_all(engine)
Session = sessionmaker(bind = engine)
